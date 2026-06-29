import User from "../models/user.model.js";
import UserProfile from "../models/profile.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async(req, res)=>{
    const {email, password, username} = req.body
     try{
         //validate email
         const isEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
         if(!isEmail) return res.status(400).json({message: "Invalid email format"});
         
         const isPassword = password.length >= 6;

         if(!isPassword) return res.status(400).json({message: "Password must be at least 6 characters long"});

         if (username) {
           const isUsername = username.length < 3 || username.length > 20;
           if(isUsername) return res.status(400).json({message: "Username must be between 3 and 20 characters long"});
         }
     
         const existingUser = await User.findOne({email});

        if(existingUser)  return res.status(400).json({message: "Email already exists"});
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email,
            password: hashedPassword,
            username: username || ''
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


export const getUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId)
      .select("-password")
      .populate({
        path: "profile",
        populate: {
          path: "personalityResult"
        }
      });
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const { bio, avatar, interests, location, ageRange, goals, isPublic, username, country, onboardingComplete, profileSetupComplete } = req.body;

    if (username !== undefined) {
      await User.findByIdAndUpdate(userId, { username }, { new: true });
    }

    let userProfile = await UserProfile.findOne({ userId });
    if (!userProfile) {
      userProfile = await UserProfile.create({
        userId,
        bio,
        avatar,
        interests,
        location,
        ageRange,
        goals,
        isPublic,
        country,
        onboardingComplete,
        profileSetupComplete
      });
      // Link to User
      const user = await User.findById(userId);
      user.profile = userProfile._id;
      await user.save();
    } else {
      userProfile.bio = bio !== undefined ? bio : userProfile.bio;
      userProfile.avatar = avatar !== undefined ? avatar : userProfile.avatar;
      userProfile.interests = interests !== undefined ? interests : userProfile.interests;
      userProfile.location = location !== undefined ? location : userProfile.location;
      userProfile.ageRange = ageRange !== undefined ? ageRange : userProfile.ageRange;
      userProfile.goals = goals !== undefined ? goals : userProfile.goals;
      userProfile.isPublic = isPublic !== undefined ? isPublic : userProfile.isPublic;
      if (country !== undefined) userProfile.country = country;
      if (onboardingComplete !== undefined) userProfile.onboardingComplete = onboardingComplete;
      if (profileSetupComplete !== undefined) userProfile.profileSetupComplete = profileSetupComplete;
      userProfile.updatedAt = Date.now();
      await userProfile.save();
    }

    // Return populated user
    const updatedUser = await User.findById(userId)
      .select("-password")
      .populate({
        path: "profile",
        populate: {
          path: "personalityResult"
        }
      });

    return res.status(200).json({
      message: "Profile updated successfully",
      user: updatedUser
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

