import express from 'express';
import { addfood, listfood, removefood } from '../controllers/FoodController.js';
import multer from 'multer';

const foodRouter = express.Router();

const storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addfood);
foodRouter.get("/list",listfood)
foodRouter.post("/remove",removefood)
export default foodRouter;
