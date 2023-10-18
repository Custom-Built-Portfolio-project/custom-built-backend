import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "Products";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [""],
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    stock: {
      type: Number,
      default: 1,
    },
    thumbnail: {
      type: Array,
      default: [],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    send:{
      type: Boolean
    }
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const productsModel = mongoose.model(collection, schema);

export default productsModel;
