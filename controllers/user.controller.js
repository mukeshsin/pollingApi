import * as dotenv from "dotenv";
dotenv.config();
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const userRegister = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.create({
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

export const userLogin = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      res.status(401).send({ message: "please fill the information" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.compare(req.body.password, salt);
    const user = await User.findOne({
      where: {
        emailId: emailId,
        password: hashedPassword,
      },
    });
    if (!user) {
      res.status(400).json({ error: "user error" });
    } else {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1hr",
      });
      return res.status(200).send({ user, token: token });
    }
  } catch (error) {
    console.log(error);
  }
};
