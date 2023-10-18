import mongoose from "mongoose";

const collection = "Carts";

const productsSubSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Products",
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { _id: false }
);

const schema = new mongoose.Schema(
  {
    products: {
      type: [productsSubSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const cartsModel = mongoose.model(collection, schema);

export default cartsModel;
