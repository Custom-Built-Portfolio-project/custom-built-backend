import mongoose, { mongo } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const collection = "reviews";

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  image: {
    type: String,
    required:false
  },
  advantages:{
    type: String,
    required: false,
  },
  disadvantages:{
    type: String,
    required: false
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

schema.plugin(mongoosePaginate)

const reviewsModel = mongoose.model(collection, schema);

export default reviewsModel;
