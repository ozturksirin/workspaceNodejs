import { Permission, Role, User } from '../models/index.js'

export const verifyRole = async (req, res, next) => {

    try {
        const user = await User.findOne({ email: req.tokenPayload.email });
        if (!user) {
            return res.status(401).json({ message: "User not found!" });
        }
        const role = await Role.findOne({ _id: user.roles });
        if (!role) {
            return res.status(401).json({ message: "Role not found!" });
        }

        const permission = await Permission.findOne({ _id: role.permissions });
        if (!permission) {
            return res.status(401).json({ message: "Permission not found!" });
        }

        if (permission.role !== Permission.permissionName) {
            return res.status(401).json({ message: "User not authorized!" });
        }
        next();
    }
    catch (error) {

        return res.status(403).json({ message: "Something went wrong", error: error });
    }
};