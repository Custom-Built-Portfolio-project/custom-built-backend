import mongoose from "mongoose";

const collection = "subType";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

const subTypeModel = mongoose.model(collection, schema);

export default subTypeModel;
