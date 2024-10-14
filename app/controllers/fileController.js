

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);





export const uploadFile = (req, res)=>{
  // Implement file upload logic here
  if(!req.file){
    return res.status(400).json({status:"fail", message:"No file uploaded"})

  }
  
  let filePath = req.file.path;
  res.json({filePath});
};

// read file 

export const readFile = async(req, res)=>{
let filePath = path.join(__dirname, '../../uploads/', req.params.filename);
console.log("file path:", filePath);
res.sendFile(filePath,(err)=>{
  if(err){
    console.log("file send fail", err);
    return res.status(404).json({status:"fail", message:"File not found."});
  }
})
};

// delete file

export const deleteFile = async(req, res)=>{
 let filePath = path.join(__dirname,`../uploads/${req.params.filename}`);
fs.unlinkSync(filePath, (err)=>{
  if(err) return res.status(500).json({status:"fail", message:"Error deleting file."});
 });
 res.json({status:"success", message:"File deleted successfully."});
};