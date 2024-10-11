import express from 'express';
const router = express.Router();


//import controllers
import * as studentController from "../controllers/studentController.js";
import authMiddleware from '../middlewares/authMiddleware.js';







//import routes
router.post("/Registration",studentController.Registration);

router.post("/login", studentController.login);

router.get("/profileRead",authMiddleware, studentController.profileRead);

router.post("/profileUpdate", studentController.profileUpdate);

router.delete("/deleteStudent", studentController.deleteStudent);





export default router;

