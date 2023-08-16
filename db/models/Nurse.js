import mongoose from "mongoose";
import "./NurseWorkDates";

const { Schema } = mongoose;

const nurseSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  yearsExperience: { type: Number, required: true },
  role: { type: String, required: true },
  hoursPerWeek: { type: Number, required: true },
  specialist: { type: Boolean, required: true },
  image: { type: String },
  email: { type: String, unique: true, required: true },
  phoneNumber: { type: Number, required: true },
  description: { type: String, required: true },
  workSchedule: { type: [Schema.Types.ObjectId], ref: "NurseWorkDates" },
  //define that it is an array of Object-Ids and has a reference to the `NurseWorkDates` schema
});

const Nurse =
  mongoose.models.Nurse || mongoose.model("Nurse", nurseSchema, "nurses");

export default Nurse;
