import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async(req, res)=>{
   const {email, password, username} = req.body
    try{
        //validate email
        const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if(!isEmail) return res.status(400).json({message: "Invalid email format"});
        
        const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(password) || password.length < 6;
        if(!isPassword ) return res.status(400).json({message: "Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"});

    
        const isUsername = username.length < 3 || username.length > 20;
        if(isUsername) return res.status(400).json({message: "Username must be between 3 and 20 characters long"});
       
    
        const existingUser = await User.findOne({email});

        if(existingUser)  return res.status(400).json({message: "Email already exists"});
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            username
        });
       
        const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRET, {expiresIn: "100h"});
       
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 100 * 60 * 60 * 1000,//100 hours in milliseconds,
            //it won't expire until browser data is cleared,

        });
    
        return res.status(200).json({message: "User registered successfully",
            newUser,
            token,

        });

    }catch{
        return res.status(500).json({message: "Internal server error"});
    }
}

export const loginUser = async(req, res)=>{
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({message: "Invalid email or password"});

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) return res.status(400).json({message: "Invalid email or password"});

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "100h"});

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 100 * 60 * 60 * 1000,//100 hours in milliseconds,
            //it won't expire until browser data is cleared,

        });
        return res.status(200).json({message: "User logged in successfully",
            user,
            token,

        });
    }catch{
        return res.status(500).json({message: "Internal server error"});
    }
}

export const logoutUser = async(req, res)=>{
    try{
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
        });
        return res.status(200).json({message: "User logged out successfully"});
    }catch{
        return res.status(500).json({message: "Internal server error"});
    }
}


export const getUserProfile = async(req, res)=>{
    try{}catch{}
}

export const updateUserProfile = async(req, res)=>{
    try{}catch{}
}

