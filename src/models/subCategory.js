import mongoose from "mongoose";

const collection = "subCategory";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subType",
    },
  ],
});

const subCategoryModel = mongoose.model(collection, schema);

export default subCategoryModel;
