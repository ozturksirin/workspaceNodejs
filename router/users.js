import express from "express";


import {
    getUsers,
    CreateUsersRegister,
    login,
    // CreateAdminUser
} from "../controller/users.js";

const router = express.Router({ mergeParams: true });


router.get("/users", getUsers)
router.post("/register", CreateUsersRegister)
router.post("/login", login)
// router.post("/createAdminUser", CreateAdminUser)

export default router;
