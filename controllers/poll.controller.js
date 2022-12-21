import Poll from "../models/poll.js";
import Option from "../models/option.js";
import Vote from "../models/vote.js";
export const createPoll = async (req, res) => {
  try {
    const poll = await Poll.create({
      title: req.body.title,
      createdBy: req.body.userId,
    });
    let optionsTitle = req.body.options.map((val) => {
      return {
        pollId: poll.id,
        ...val,
      };
    });
    await Option.bulkCreate(optionsTitle);
    res.status(200).send({ poll, optionsTitle });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
  }
};

//poll list by page no.
export const getListPoll = async (req, res) => {
  try {
    const polls = await Poll.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: (req.params.page - 1) * parseInt(req.query.limit),
      include: [
        {
          model: Option,
          as: "optionList",
          attributes: ["optionTitle", "pollId", "id"],
          include: {
            model: Vote,
            attributes: ["optionId"],
            attributes: ["optionId"],
          },
        },
      ],
    });

    res.status(200).send(polls);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
  }
};

export const getSinglePoll = async (req, res) => {
  try {
    const poll = await Poll.findOne({
      attributes: ["title"],
      include: [
        {
          model: Option,
          as: "optionList",
          attributes: ["optionTitle", "pollId", "id"],
          include: {
            model: Vote,
            as: "voteCount",
            attributes: ["optionId"],
          },
        },
      ],
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(poll);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
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
    res.status(500).send(error.original.sqlMessage);
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
    res.status(500).send(error.original.sqlMessage);
  }
};
