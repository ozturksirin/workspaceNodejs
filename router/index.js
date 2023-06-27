
import express from "express";
import { authorize, verifyRole, verifyWritePermission, verifyProductPlacement } from "../middleware/index.js";

import usersRouter from './users.js';
import rolesRouter from './role.js';
import permissionsRouter from './permission.js';
import productsRouter from './products.js';
import orderRouter from './order.js';


const router = express.Router();

router.use('/', usersRouter);
router.use('/roles', rolesRouter);
router.use('/permission', permissionsRouter);
router.use('/products', productsRouter)
router.use('/order', orderRouter);


// secret page
router.get("/secret", authorize, verifyProductPlacement, (req, res) => {
    res.json({
        message: "secret page login successfull",
        // user: req.tokenPayload.email,
        user: {
            email: req.tokenPayload.email,
        }
    });
});


export default router;
