import mongoose from "mongoose";


const collection = "users";

const schema = new mongoose.Schema({
  fistName: {
    type: String,
    required:true
  },
  lastName: {
    type: String,
    required:true
  },
  address:{
    type: String,
    required: true,
  },
  email:{
    type: String,
    unique:true,
    index: true,
    required:true
  },
  password: String,
  role:{
    type: String,
    default: "user"
  },
  cart:{
    type:mongoose.SchemaTypes.ObjectId,
    ref:"Carts"
  },
  active:{
    type:Boolean,
    default: true
  }

},{timestamps:true});


const UserModel = mongoose.model(collection, schema);

export default UserModel;