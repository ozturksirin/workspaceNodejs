import mongoose, { Schema } from "mongoose";

const roleSChema = mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    roleName: { type: String, required: true, unique: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Permission" }],
});

const Role = mongoose.model("Role", roleSChema);

export default Role;
