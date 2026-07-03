import { Router } from 'express';
import { authenticateToken } from '../middlewares/testResult.middleware.js';
import { generateInvite, getInviteStatus, acceptInvite, getComparison, listMyInvites, deleteInvite } from '../controllers/invite.controller.js';

const inviteRouter = Router();

inviteRouter.post('/generate', authenticateToken, generateInvite);
inviteRouter.get('/me', authenticateToken, listMyInvites);
inviteRouter.get('/:token', getInviteStatus);
inviteRouter.delete('/:token', authenticateToken, deleteInvite);
inviteRouter.post('/:token/accept', authenticateToken, acceptInvite);
inviteRouter.get('/:token/comparison', authenticateToken, getComparison);

export default inviteRouter;
