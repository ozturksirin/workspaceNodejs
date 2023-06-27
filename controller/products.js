import { Products, variantProducts } from '../models/index.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createProducts = async (req, res) => {
    try {
        const newProducts = await Products.create(req.body); // kayıt oluştur
        const newVariantProduct = new variantProducts({
            variantId: req.body.variantId,
            variantName: req.body.variantName,
            variantSize: req.body.variantSize,
            variantColor: req.body.variantColor,
            variantStock: req.body.variantStock,
            productId: newProducts._id,
        });
        await newVariantProduct.save();
        res.status(201).json({
            newProducts,
            newVariantProduct
        });
    }
    catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
};

export const updateProducts = async (req, res) => {
    const { id: _id } = req.params;
    const products = req.body;
    try {
        const updateProduct = await Products.findByIdAndUpdate(_id, products, { new: true });
        res.status(200).json(updateProduct);
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

export const deleteProducts = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const deleteProduct = await Products.findByIdAndRemove(_id);
        res.status(200).json(deleteProduct);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};    
