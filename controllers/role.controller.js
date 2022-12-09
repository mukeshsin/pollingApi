import Role from "../models/role.js";
export const createRole = async (req, res) => {
  try {
    await Role.create(req.body);
    res.status(200).send({ message: "role created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};

export const roleList = async (req, res) => {
  try {
    const roles = await Role.findAll();
    console.log(roles);
    res.status(200).send(roles);
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const getRoleById = async (req, res) => {
  try {
    const role = await Role.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(role);
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const updateRole = async (req, res) => {
  try {
    await Role.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "Role updated",
    });
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const deleteRole = async (req, res) => {
  try {
    await Role.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "Role Deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};
