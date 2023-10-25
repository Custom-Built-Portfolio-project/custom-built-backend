import categoryModel from "../../models/category.js";

export const postCategory = async (req, res) => {
  const { name, subCategories } = req.body;

  try {
    if (!name || !subCategories)
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });

    const existingCategory = await categoryModel.findOne({ name: name });
    if (existingCategory)
      return res
        .status(400)
        .send({ error: "Ya existe una categoria con ese nombre" });

    const newCategory = {
      name,
      subCategories,
    };

    const result = await categoryModel.create(newCategory);

    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    if (categories.length === 0)
      return res.status(400).send("No hay categorias");
    else return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getSubcategoriesOfComponentsAndStorage = async (req, res) => {
  const { name } = req.body;
  try {
    const category = await categoryModel
      .findOne({ name: name })
      .populate("subCategories", {
        name: 1,
        _id: 0,
      });
    console.log(category);
    if (!category)
      return res.status(400).send("No existe esa categoria amigo querido");
    const subCategorias = category.subCategories.map(
      (subcategory) => subcategory.name
    );
    return res.status(200).json(subCategorias);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
