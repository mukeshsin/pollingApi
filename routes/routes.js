import express from "express";

import {
  createRole,
  roleList,
  getRoleById,
  updateRole,
  deleteRole,
} from "../controllers/role.controller.js";

// user register and user login
import { userRegister, userLogin } from "../controllers/user.controller.js";

//user create

import{createUser,userList,getUserById,updateUser,deleteUser} from"../controllers/user.controller.js";
import {  validateJwtToken } from "../middleware.js";




const router = express.Router();
router.post("/role/add", createRole);
router.get("/role/list", roleList);
router.get("/role/:id", getRoleById);
router.put("/role/edit/:id", updateRole);
router.delete("/role/delete/:id", deleteRole);

//user register
router.post("/user/register", userRegister);

//user login
router.post("/user/login", userLogin);

//user create
router.post("/user/create",validateJwtToken,createUser);

//user list
router.get("/user/list",validateJwtToken,userList);

// user List by Id
router.get("/user/:id",validateJwtToken,getUserById);

router.put("/user/:id", validateJwtToken,updateUser);
router.delete("/user/:id",validateJwtToken, deleteUser);

export default router;
