import productsModel from "../../models/products.js";

const handlePostProducts = async (req, res) => {
  const {
    title,
    description,
    category,
    code,
    stock,
    thumbnail,
    price,
    status,
  } = req.body;
  try {
    if (
      !title ||
      !description ||
      !category ||
      !code ||
      !stock ||
      !thumbnail ||
      !price ||
      !status
    )
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });
    const newProduct = {
      title,
      description,
      category,
      code,
      stock,
      thumbnail,
      price,
      status,
    };
    const result = await productsModel.create(newProduct);
    return res.status(201).send({ status: "success", payload: result });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export { handlePostProducts };
