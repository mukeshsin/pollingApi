import express from('express');

import{
    createRole
} from "../controllers/role.js";



router.post("/role/add", createRole);




export default router;