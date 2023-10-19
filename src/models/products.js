import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "products";
const subSchema = new mongoose.Schema({

})

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
      type:mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true
    },
    subCategory:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"subType",
      required: true,
    },
    subType:{
      type:mongoose.Schema.Types.ObjectId,
      required:true
    },
    code: {
      type: String,
      required: true,
      index: true
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
    freeShipping:{
      type: Boolean
    }
  },
  { timestamps: true }
);

schema.plugin(mongoosePaginate);

const productsModel = mongoose.model(collection, schema);

export default productsModel;
