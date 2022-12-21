import Option from "../models/option.js";

export const updateOption = async (req, res) => {
  try {
    await Option.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ message: "option updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
  }
};

export const deleteOption = async (req, res) => {
  try {
    await Option.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ message: "option delete successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
  }
};
