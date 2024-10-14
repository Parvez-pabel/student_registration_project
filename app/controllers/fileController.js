

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const uploadFile = (req, res) => {
  try {
    console.log(req.file);
    // File is available at req.file thanks to Multer
    if (!req.file) {
      return res.status(400).json({ status: "fail", message: "No file uploaded." });
    }

    return res.json({
      status: "success",
      message: "File uploaded successfully.",
      filePath: req.file.path, // Path to the uploaded file
    });
  } catch (error) {
    return res.status(400).json({ status: "fail", message: "Error uploading file." });
  }
};




// read file 

export const readFile = async(req, res)=>{
  try {
    let files = req.params.filename
    let filePath = path.join(__dirname, '../../uploads/', files);
    return res.sendFile(filePath)
  } catch (error) {
    return res.status(404).json({status:"fail", message:"File not found."});
    
  }
};

// delete file

export const deleteFile = async(req, res)=>{

  try {
    let files = req.params.filename
    let filePath = path.join(__dirname, '../../uploads/', files);
    if(!fs.existsSync(filePath)){
      return res.status(404).json({status:"fail", message:"File not found."});
    }
    await fs.promises.unlink(filePath);
    return res.status(200).json({status:"success", message:"File deleted successfully."});


  } catch (error) {
    return res.status(404).json({status:"fail", message:"File not found."});
  }
 
};