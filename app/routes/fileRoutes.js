import express from 'express';
import { deleteFile, readFile, uploadFile } from '../controllers/fileController.js';
import { upload } from '../middlewares/fileMiddleware.js';






const router = express.Router();

router.post('/upload', upload.single('file'),uploadFile);
router.get ('/read/:filename', readFile);
router.delete('/delete/:filename', deleteFile);

export default router;
