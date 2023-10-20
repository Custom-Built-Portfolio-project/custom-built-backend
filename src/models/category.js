import mongoose from "mongoose";

const collection = "category";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  subCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategory",
    },
  ],
});
schema.index({ name: 1 });


const categoryModel = mongoose.model(collection, schema);

export default categoryModel;
