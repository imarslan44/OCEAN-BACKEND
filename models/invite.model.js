import mongoose from 'mongoose';

const inviteSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  inviterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  inviteeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null
  },
  status: {
    type: String,
    enum: ['waiting', 'accepted', 'completed', 'failed'],
    default: 'waiting'
  },
  expiresAt: {
    type: Date,
    required: true
  }
}, { timestamps: true });

const Invite = mongoose.model('Invite', inviteSchema);
export default Invite;
