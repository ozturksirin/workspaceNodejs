import expres from 'express';

import {
    createRoles,
    assignRoleToUser,
}
    from "../controller/role.js";

const router = expres.Router();

router.post("/createRoles", createRoles)
router.put("/assignRoleToUser", assignRoleToUser)

export default router;