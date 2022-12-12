import express from "express";

//role crud operation
import {
  createRole,
  roleList,
  getRoleById,
  updateRole,
  deleteRole,
} from "../controllers/role.controller.js";

// user register and user login
import { userRegister, userLogin } from "../controllers/user.controller.js";

//user crud operation
import {
  createUser,
  getUsersListByPage,
  getUserById,
  updateUser,
  deleteUser,
  userMyProfile,
} from "../controllers/user.controller.js";

//import middleware
import { validateJwtToken } from "../middleware.js";
import { validateUserData, validateRoleData, validate } from "../middleware.js";

//poll crud operation
 import {createPoll}from "../controllers/poll.controller.js";

//Define router
const router = express.Router();

//routes for role
router.post("/role/add", [validateRoleData(), validate], createRole);
router.get("/role/list", roleList);
router.get("/role/:id", getRoleById);
router.put("/role/edit/:id", [validateRoleData(), validate], updateRole);
router.delete("/role/delete/:id", deleteRole);

//routes for user
router.post("/user/register", [validateUserData(), validate], userRegister);
router.post("/user/login", userLogin);
router.post(
  "/user/create",
  validateJwtToken,
  [validateUserData(), validate],
  createUser
);
router.get("/user/list/:page", validateJwtToken, getUsersListByPage);
router.get("/user/:id", validateJwtToken, getUserById);
router.put(
  "/user/:id",
  validateJwtToken,
  validateUserData(),
  validate,
  updateUser
);
router.delete("/user/:id", validateJwtToken, deleteUser);
router.get("/user/own/profile", validateJwtToken, userMyProfile);


//routes for poll
router.post("/poll/add",createPoll);

export default router;
