import mongoose from "mongoose";

const collection = "category";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subCategories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subCategory",
    },
  ],
});

const categoryModel = mongoose.model(collection, schema);

export default categoryModel;
