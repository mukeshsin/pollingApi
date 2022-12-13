import Poll from "../models/poll.js";

export const createPoll = async (req, res) => {
  try {
    const poll = await Poll.create({
      title: req.body.title,
      createdBy: req.body.userId,
    });
    res.status(200).send(poll);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};

export const getListPoll = async (req, res) => {
  try {
    const polls = await Poll.findAll();
    res.status(200).send(polls);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};

export const getSinglePoll = async (req, res) => {
  try {
    const poll = await Poll.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(poll);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};

export const updatePoll = async (req, res) => {
  try {
    await Poll.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ message: "poll updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};

export const deletePoll = async (req, res) => {
  try {
    await Poll.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ message: "poll delete successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};
