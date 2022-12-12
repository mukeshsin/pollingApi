import * as dotenv from "dotenv";
dotenv.config();
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//user Register
export const userRegister = async (req, res) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  try {
    await User.create({
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      roleId: req.body.roleId,
    });

    res.status(200).send({
      message: "User register successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
    });
  }
};

// user Login
export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).send({ message: "please fill the information" });
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.compare(req.body.password, salt);
    const user = await User.findOne({
      where: {
        email: email,
        password: hashedPassword,
      },
    });
    if (!user) {
      res.status(400).json({ message: "user data not found" });
    } else {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.expire,
      });
      return res.status(200).send({ user, token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};

//create User
export const createUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await User.create(req.body);
    res.status(200).send({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};
// users list by page no.
export const getUsersListByPage = async (req, res) => {
  try {
    const users = await User.findAndCountAll({
      limit: parseInt(req.query.limit),
      offset: (req.params.page - 1) * parseInt(req.query.limit),
    });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

//get user by id
export const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "User updated",
    });
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({
      message: "User Deleted",
    });
  } catch (error) {
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};

export const userMyProfile = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.body.userId } });
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "500 error to the user",
    });
  }
};
