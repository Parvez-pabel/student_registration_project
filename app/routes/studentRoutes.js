import express from 'express';
const router = express.Router();


//import controllers
import * as studentController from "../controllers/studentController.js";
import authMiddleware from '../middlewares/authMiddleware.js';







//import routes
router.post("/Registration",studentController.Registration);

router.post("/login", studentController.login);

router.get("/profileRead/:id",authMiddleware, studentController.profileRead);

router.post("/profileUpdate",authMiddleware, studentController.profileUpdate);






export default router;

