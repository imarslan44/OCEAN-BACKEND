import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  username: {
    type: String,
    required: false,
  },
  
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserProfile'
  },

  testHistory: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Test'
  }],
  
  preferences: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserPreferences'
  },

},{timestamps: true});


const User = mongoose.model('User', userSchema);
export default User;




