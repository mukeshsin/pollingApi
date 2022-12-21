import Company from "../models/company.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import { generateToken } from "../helper.js";
import Role from "../models/role.js";

export const companyRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const company = await Company.create({
      id: req.body.id,
      name: req.body.name,
      address: req.body.address,
    });
    const user = await User.create({
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: hashedPassword,
      companyId: company.id,
    });
    await Role.create({
      name: req.body.name,
      description: req.body.description,
    });

    res.status(200).send({ company, token: await generateToken(user.id) });
  } catch (error) {
    console.log(error);
    res.status(500).send(error.original.sqlMessage);
  }
};
