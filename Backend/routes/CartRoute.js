import express from 'express';
import { addtocart, removefromcart, getcartdata } from '../controllers/CartController.js';
import authMiddleware from '../middleares/Auth.js';

const cartRouter = express.Router();

cartRouter.post("/add", authMiddleware, addtocart);
cartRouter.post("/remove", authMiddleware, removefromcart);
cartRouter.post("/get", authMiddleware, getcartdata);

export default cartRouter;
