import express from 'express';

import {
    createOrder
} from "../controller/order.js";


const router = express.Router({ mergeParams: true });

router.post("/createOrder", createOrder);

export default router;