import mongoose from "mongoose";

const variantProductSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    variantId: { type: Number, required: false },
    variantName: { type: String, required: true },
    variantSize: { type: String, required: true },
    variantColor: { type: String, required: true },
    variantStock: { type: Number, required: true },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});


const VariantProduct = mongoose.model("VariantProduct", variantProductSchema);
export default VariantProduct;