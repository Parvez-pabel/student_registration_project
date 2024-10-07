import mongoose from "mongoose";












const studentSchema = new mongoose.Schema({

  name: { type: String, required: true },
  roll_no: { type: String, required: true, unique: true },
  phone_number: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  course: { type: String, required: true },
  department: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String, default: "" },
  student_id:{ type:mongoose.Schema.Types.ObjectId},
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }


});
const students = mongoose.model("students", studentSchema);

export default students;