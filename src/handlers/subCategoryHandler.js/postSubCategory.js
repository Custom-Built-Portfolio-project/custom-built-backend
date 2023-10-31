import subCategoryModel from "../../models/subCategory.js";

const postSubCategory = async (req, res) => {
  const { name, subTypes } = req.body;
  try {
    if (!name||!subTypes)
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });
    const existingSubCategory = await subCategoryModel.findOne({name: name})
    if(existingSubCategory) return res.status(400).send({error: "Ya existe una subcategoria con ese nombre"})
    const newSubCategory = {
      name,
      subTypes
    };

    const result = await subCategoryModel.create(newSubCategory);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default postSubCategory;
