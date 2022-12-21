import jwt from "jsonwebtoken";
import { check, validationResult } from "express-validator";

//function for validate jsonwebtoken
export const validateJwtToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    res.status(401).send({ message: "unauthorised token" });
  }
  console.log(token);
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      res.status(400).send({ message: "unauthorised token expire" });
    } else {
      req.body["userId"] = user.id;
      next();
    }
  });
};

// validateuserData by express-validator
export const validateUserData = () => {
  return [
    check("password")
      .isLength({ min: 8 })
      .withMessage("password must be contain 8 character"),
    check("firstName")
      .isLength({ min: 4 })
      .withMessage("firstName must be contain 4 character"),
    check("lastName")
      .isLength({ min: 4 })
      .withMessage("lastName must be contain 4 character"),
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("please enter a valid email"),
    check("roleId").notEmpty().withMessage("roleId cannot be empty"),
  ];
};

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

//validateUserData by express-validator

export const validateRoleData = () => {
  return [
    check("name").isLength({ min: 2 }).withMessage("name must be 5 character"),
    check("description")
      .isLength({ min: 15 })
      .withMessage("write a description atleast 15 character"),
  ];
};

//validatePollData
export const valiadatePollData = () => {
  return [
    check("title")
      .isLength({ min: 8 })
      .withMessage("title must be contain atleast 8  character more"),
  ];
};
