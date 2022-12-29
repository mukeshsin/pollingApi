import Vote from "../models/vote.js";

export const doVote = async (req, res) => {
  try {
    await Vote.create({
      optionId: req.body.optionId,
      createdBy: req.body.userId,
    });
    res.status(200).send({ message: "vote create successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
  }
};
