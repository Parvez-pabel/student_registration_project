import students from "../models/studentModel.js";

//Registration
export const Registration = async(req, res)=>{
  try {
    let reqBody = req.body;
    await students.create(reqBody)
    res.status(201).json({status:"success", message:"Registration successful."});
    
  } catch (error) {
    return res.json({status:"not success", "message":error.toString()});
  }
}

//log in

export const login = async(req, res)=>{

  try {
    let reqBody = req.body;
    let data=await students.findOne(reqBody)
    return res.status(201).json({status:"success", message:"Registration successful.", data});
    
  } catch (error) {
    return res.json({status:"not success", "message":error.toString()});
  }




  return res.json({status:"success"});

}

//Profile read

export const profileRead = async(req, res)=>{
  return res.json({status:"success"});

}

//Profile delete

export const deleteStudent = async(req, res)=>{
  return res.json({status:"success"});

}

//Profile update

export const profileUpdate = async(req, res)=>{
  return res.json({status:"success"});

}

//log out

export const logout = async(req, res)=>{
  return res.json({status:"success"});

}



