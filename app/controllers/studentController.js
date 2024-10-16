import students from "../models/studentModel.js";
import { TokenEncode } from "../utils/generateToken.js";

//Registration
export const Registration = async(req, res)=>{
  
  try {
    let reqBody = req.body;
  
    
    await students.create(reqBody)
   return res.status(201).json({status:"success", message:"Registration successful."});
    
  } catch (error) {
    return res.status(500).json({status:"not success", "message":error.toString()});
  }
}

//log in

export const login = async(req, res)=>{

  try {
    let reqBody = req.body;
    let data=await students.findOne(reqBody)
    if (data==null) {
      return res.json({status:"fail", "message":"User not found"})
      
    } else {
      const token = TokenEncode(data.email, data._id);
      
      return res.status(201).json({status:"success", message:"Log in successful.", data:{token:token}});
 
    } 
  } catch (error) {
    return res.json({status:"not success", "message":error.toString()});
  }
}

//Profile read

export const profileRead = async(req, res)=>{
  try {
    let student_id=req.headers['student_id'];
    let data=await students.findOne({"_id":student_id});
    return res.status(201).json({status:"success", message:"User profile fetched successfully.", data:data});
    
  } catch (error) {
    return res.json({status:"fail", "message":"User not found"})
    
  }

 
}

//Profile delete

export const deleteStudent = async(req, res)=>{
  return res.json({status:"success"});

}

//Profile update

export const profileUpdate = async(req, res)=>{
  try {
    let reqBody = req.body;
    let student_id=req.headers['student_id'];
    await students.updateOne( {"_id":student_id }, reqBody)
    res.status(201).json({status:"success", message:"update successful."});
    
  } catch (error) {
    return res.json({status:"not success", "message":error.toString()});
  }

}

/*log out

export const logout = async(req, res)=>{
  return res.json({status:"success"});

}*/



