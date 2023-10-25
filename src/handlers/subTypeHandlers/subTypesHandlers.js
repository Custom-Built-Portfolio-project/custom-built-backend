import subTypeModel from "../../models/subType.js";

export const postSubType = async (req, res) => {
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
    
    return res.status(500).json({ error: error.message });
  }
};

export const getSubtypeByName = async (req, res) => {
  const { name } = req.body;
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).send('Nombre inválido');
  }
  try {
    const Subtype = await subTypeModel.findOne({ name: name }).exec();;
    if (Subtype) return res.status(200).json(Subtype);
    else return res.status(404).send("No encontré el subtipo amigo");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


