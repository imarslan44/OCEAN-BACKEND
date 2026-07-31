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

inviteSchema.index({ inviterId: 1, status: 1 });
inviteSchema.index({ inviteeId: 1, status: 1 });

const Invite = mongoose.model('Invite', inviteSchema);
export default Invite;
