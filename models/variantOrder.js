import mongoose from "mongoose";

const variantOrderSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    variantId: { type: Number, required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    total: { type: Number, required: true },
});

const VariantOrder = mongoose.model("VariantOrder", variantOrderSchema);
export default VariantOrder;
