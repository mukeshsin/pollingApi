import Option from "../models/option.js";
export const createOption = async (req, res) => {
  try {
    const option = await Option.create({
      optionTitle: req.body.optionTitle,
      pollId: req.body.pollId,
      createdBy: req.body.userId,
    });
    console.log(option);
    res.status(200).send({ message: "option create successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};
