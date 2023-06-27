import express from 'express';

import {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts
}
    from "../controller/products.js";

const router = express.Router({ mergeParams: true });

router.get("/", getProducts);
router.post("/createProducts", createProducts);
router.put("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;
