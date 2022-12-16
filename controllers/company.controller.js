import Company from "../models/company.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const companyRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const company = await Company.create({
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,
    });
    await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      companyId: company.id,
    });
    await User.findOne({
      where: {
        email: req.body.email,
        password: hashedPassword,
      },
    });
    let token = jwt.sign({ id: req.body.id }, process.env.JWT_SECRET_KEY, {
      expiresIn: process.env.expire,
    });

    res.status(200).send({ company, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};
