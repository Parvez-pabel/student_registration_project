import express from 'express';
const router = express.Router();


//import controllers
import * as studentController from "../controllers/studentController.js";
import authMiddleware from '../middlewares/authMiddleware.js';







//import routes
router.post("/Registration",(req,res)=>{
  res.json({status:"success"});
});

router.post("/login", studentController.login);

router.get("/profileRead",authMiddleware, studentController.profileRead);

router.post("/profileUpdate",authMiddleware, studentController.profileUpdate);






export default router;

