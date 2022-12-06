import User from "../models/user.js";
import bcrypt from "bcrypt";

export const userRegister = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.create({
      userName: req.body.userName,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      emailId: req.body.emailId,
      roleId: req.body.roleId,
    });

    res.status(200).send({
      message: "User register successful",
    });
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};
