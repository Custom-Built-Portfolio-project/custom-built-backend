import categoryModel from "../../models/category.js";

const postCategory = async (req, res) => {
  const { name } = req.body;

  try {
    if (!name)
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });
    
    const existingCategory = await categoryModel.findOne({name: name});
    if(existingCategory) return res.status(400).send({error: "Ya existe una categoria con ese nombre"})

    const newCategory = {
      name,
    };

    const result = await categoryModel.create(newCategory);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default postCategory;
