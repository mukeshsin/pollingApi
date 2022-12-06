import express from "express";

import {
  createRole,
  roleList,
  getRoleById,
  updateRole,
  deleteRole,
} from "../controllers/role.controller.js";

import { userRegister, userLogin } from "../controllers/user.controller.js";

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

export default router;
