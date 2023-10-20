import subTypeModel from "../../models/subType.js";

const postSubType = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name)
      return res
        .status(400)
        .send({ status: "error", error: "Incomplete values" });

    const existingSubType = await subTypeModel.findOne({ name: name });
    if (existingSubType)
      return res
        .status(400)
        .send({ error: "Ya existe un subtipo con ese nombre" });
    const newSubtype = {
      name,
    };
    const result = await subTypeModel.create(newSubtype);

    return res.status(201).json({ status: "success", payload: result });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error.message });
  }
};

export default postSubType;
