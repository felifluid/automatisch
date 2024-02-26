import { Router } from 'express';
import { authenticateUser } from '../../../helpers/authentication.js';
import { authorizeUser } from '../../../helpers/authorization.js';
import getFlowAction from '../../../controllers/api/v1/flows/get-flow.js';

const router = Router();

router.get('/:flowId', authenticateUser, authorizeUser, getFlowAction);

export default router;