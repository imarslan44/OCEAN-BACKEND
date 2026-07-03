import Invite from '../models/invite.model.js';
import PersonalityResult from '../models/results.model.js';
import crypto from 'crypto';
import User from '../models/user.model.js';

export const generateInvite = async (req, res) => {
  try {
    const inviterId = req.user.id;
    // Check if there is already an active waiting invite
    let invite = await Invite.findOne({ inviterId, status: 'waiting' });
    
    if (!invite) {
      const token = crypto.randomBytes(8).toString('hex');
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7); // Expires in 7 days

      invite = new Invite({
        token,
        inviterId,
        expiresAt
      });
      await invite.save();
    }

    res.status(200).json({ token: invite.token, invite });
  } catch (error) {
    console.error('Error generating invite:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getInviteStatus = async (req, res) => {
  try {
    const { token } = req.params;
    const invite = await Invite.findOne({ token })
      .populate('inviterId', 'username email')
      .populate('inviteeId', 'username email');

    if (!invite) return res.status(404).json({ message: 'Invite not found' });

    res.status(200).json({ invite });
  } catch (error) {
    console.error('Error fetching invite:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Also an endpoint to list all invites for the current user
export const listMyInvites = async (req, res) => {
  try {
    const userId = req.user.id;
    const invites = await Invite.find({
      $or: [{ inviterId: userId }, { inviteeId: userId }],
      status: { $in: ['waiting', 'accepted', 'completed'] }
    })
      .populate('inviterId', 'username')
      .populate('inviteeId', 'username')
      .sort({ createdAt: -1 });

    const pendingInvites = invites.filter(invite => ['waiting', 'accepted'].includes(invite.status));
    const completedInvites = invites.filter(invite => invite.status === 'completed');
    const visibleInvites = pendingInvites.length > 0
      ? [pendingInvites[0], ...completedInvites]
      : completedInvites;

    res.status(200).json({ invites: visibleInvites });
  } catch (error) {
    console.error('Error listing invites:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const deleteInvite = async (req, res) => {
  try {
    const { token } = req.params;
    const userId = req.user.id;

    const invite = await Invite.findOne({ token });
    if (!invite) return res.status(404).json({ message: 'Invite not found' });

    const isParticipant = invite.inviterId?.toString() === userId || invite.inviteeId?.toString() === userId;
    if (!isParticipant) {
      return res.status(403).json({ message: 'You are not allowed to remove this invite' });
    }

    await Invite.deleteOne({ _id: invite._id });
    res.status(200).json({ message: 'Invite removed' });
  } catch (error) {
    console.error('Error deleting invite:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const acceptInvite = async (req, res) => {
  try {
    const { token } = req.params;
    const inviteeId = req.user.id;

    const invite = await Invite.findOne({ token });
    if (!invite) return res.status(404).json({ message: 'Invite not found' });
    if (invite.inviterId.toString() === inviteeId) {
      return res.status(400).json({ message: 'Cannot accept your own invite' });
    }

    invite.inviteeId = inviteeId;
    
    // Check if invitee has completed the test
    const inviteeResult = await PersonalityResult.findOne({ userId: inviteeId }).sort({ createdAt: -1 });
    if (inviteeResult) {
      invite.status = 'completed';
    } else {
      invite.status = 'accepted';
    }
    await invite.save();

    res.status(200).json({ invite, message: 'Invite accepted' });
  } catch (error) {
    console.error('Error accepting invite:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const getComparison = async (req, res) => {
  try {
    const { token } = req.params;
    const invite = await Invite.findOne({ token })
      .populate('inviterId', 'username')
      .populate('inviteeId', 'username');

    if (!invite) return res.status(404).json({ message: 'Invite not found' });

    // Ensure both users have a test result
    const inviterResult = await PersonalityResult.findOne({ userId: invite.inviterId._id }).sort({ createdAt: -1 });
    const inviteeResult = await PersonalityResult.findOne({ userId: invite.inviteeId._id }).sort({ createdAt: -1 });

    if (!inviterResult || !inviteeResult) {
      return res.status(400).json({ message: 'Both users must complete the assessment' });
    }

    if (invite.status !== 'completed') {
      invite.status = 'completed';
      await invite.save();
    }

    // Format the response for the frontend radars
    const comparison = {
      inviter: {
        name: invite.inviterId.username || 'User 1',
        scores: {
          O: inviterResult.openness,
          C: inviterResult.conscientiousness,
          E: inviterResult.extraversion,
          A: inviterResult.agreeableness,
          N: inviterResult.neuroticism,
        },
        archetype: inviterResult.personalityType || 'Unknown'
      },
      invitee: {
        name: invite.inviteeId.username || 'User 2',
        scores: {
          O: inviteeResult.openness,
          C: inviteeResult.conscientiousness,
          E: inviteeResult.extraversion,
          A: inviteeResult.agreeableness,
          N: inviteeResult.neuroticism,
        },
        archetype: inviteeResult.personalityType || 'Unknown'
      }
    };

    res.status(200).json({ comparison, invite });
  } catch (error) {
    console.error('Error getting comparison:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
