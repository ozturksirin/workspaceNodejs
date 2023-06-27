import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: String, required: false, maxlength: 20 },
    email: { type: String, required: true, unique: true, maxlength: 40 },
    password: { type: String, required: false, minlength: 6 },
    passwordAgain: { type: String, required: false, minlength: 6 },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const User = mongoose.model("User", userSchema);
export default User;