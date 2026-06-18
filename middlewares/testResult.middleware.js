import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/env.config.js';
import User from '../models/user.model.js';

/**
 * Middleware to authenticate JWT token and populate req.user.
 * Checks both cookie and Authorization headers (Bearer token).
 */
export const authenticateToken = async (req, res, next) => {
  try {
    let token;

    // Check authorization header first
    if (req.headers.authorization) {
      const parts = req.headers.authorization.split(' ');
      if (parts.length === 2 && parts[0] === 'Bearer') {
        token = parts[1];
      }
    }

    // Fallback to cookie
    if (!token && req.cookies?.token) {
      token = req.cookies.token;
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Authentication middleware error:', error);
    return res.status(401).json({ message: 'Unauthorized: Invalid token', details: error.message });
  }
};
