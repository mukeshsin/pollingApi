import Company from "../models/company.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

export const companyRegister = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const company = await Company.create({
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
    res.status(200).send(company);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "500 error to the user" });
  }
};
