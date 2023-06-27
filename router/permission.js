import express from "express";


import {
    createPermission,
    assignPermissionToRole,

}
    from "../controller/permission.js";

const router = express.Router();


router.post("/createPermission", createPermission)
router.put("/assignPermissionToRole", assignPermissionToRole)


export default router;