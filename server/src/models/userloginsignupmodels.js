import mongoose from "mongoose";
import { userConnection } from "../db/connections.js";



const userSchema =new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  }
});


const UserDetailsmodel = userConnection.model("UserDetails", userSchema);

export { UserDetailsmodel };