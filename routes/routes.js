import express from'express';

import{
    createRole,
    roleList,
    getRoleById,
    updateRole,
    deleteRole
} from "../controllers/role.controller.js";


import{
    userRegister

} from"../controllers/user.controller.js";

const router = express.Router();


router.post("/role/add", createRole);
router.get("/role/list", roleList);
router.get("/role/:id", getRoleById);
router.put("/role/edit/:id", updateRole);
router.delete("/role/delete/:id", deleteRole);

//user register
router.post("/user/register",userRegister);


export default router;