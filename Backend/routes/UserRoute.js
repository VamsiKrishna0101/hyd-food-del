import express from 'express';
import { loginUser, registerUser } from '../controllers/UserController.js';  // Added .js extension

const userRouter = express.Router();
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

export default userRouter;
