import { User, Role, Permission } from '../models/index.js'

export const verifyProductPlacement = async (req, res, next) => {
    try {
        //productplacement hatası var burada
        const user = await User.findOne({ email: req.tokenPayload.email });
        const role = user.roles ? await Role.findOne({ _id: user.roles }) : null;
        const permission = role ? await Permission.findOne({ _id: role.permissions }) : null;

        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }
        else if (!role) {
            return res.status(401).json({ message: "Role not found!" });
        }
        else if (!permission) {
            return res.status(401).json({ message: "Permission not found!" });
        }
        else if (permission._id !== permission._id) {
            return res.status(401).json({ message: "User not authorized! ProductPlacement" });
        }
        next();
    }
    catch (error) {
        return res.status(403).json({ message: "Something went wrong", error: error });
    }
};