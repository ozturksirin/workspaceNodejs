import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    variantOrderId: { type: mongoose.Schema.Types.ObjectId, ref: "VariantOrder" }
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
