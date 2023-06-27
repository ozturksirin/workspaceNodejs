import mongoose, { Schema } from "mongoose";
const permissionSchema = mongoose.Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    permissionName: { type: String, required: true },
    description: { type: String, required: false },
});
const Permission = mongoose.model("Permission", permissionSchema);
export default Permission;