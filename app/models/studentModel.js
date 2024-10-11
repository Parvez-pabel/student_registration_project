import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({

  name: { type: String, required: true },
  roll_no: { type: String, unique: true },
  phone_number: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  gender: { type: String },
  password: { type: String, required: true },
  student_id:{ type:mongoose.Schema.Types.ObjectId},
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }


});
const students = mongoose.model("students", studentSchema);

export default students;