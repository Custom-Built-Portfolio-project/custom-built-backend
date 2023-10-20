import mongoose from "mongoose";

const collection = "subCategory";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  subTypes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subType",
    },
  ],
});

schema.index({ name: 1 });

const subCategoryModel = mongoose.model(collection, schema);

export default subCategoryModel;
