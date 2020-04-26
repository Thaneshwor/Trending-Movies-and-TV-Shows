import express from 'express';
import { createUser, signinUser } from '../controllers/usersController';

const router = express.Router();

// users Routers

router.post('/auth/login', signinUser);
router.post('/auth/signUp', createUser);

export default router;
