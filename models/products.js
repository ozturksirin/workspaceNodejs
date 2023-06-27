import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    productId: { type: Number, required: true },
    productName: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    image: { type: String, required: false },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    dateCreated: { type: Date, default: Date.now },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
