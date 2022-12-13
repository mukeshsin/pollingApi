import Vote from "../models/vote.js";

export const voteCount = async (req, res) => {
  try {
    await Vote.create({
      optionId: req.body.optionId,
      createdBy: req.body.userId,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};
