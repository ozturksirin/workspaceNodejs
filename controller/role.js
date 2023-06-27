
import { Role, User } from '../models/index.js'


export const createRoles = async (req, res) => {
    try {
        const { roleName, permissions } = req.body;
        const newRole = new Role({
            roleName,
            permissions
        });
        const savedRole = await newRole.save();
        res.status(200).json({ message: "Role created successfully", role: savedRole });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};

export const assignRoleToUser = async (req, res) => {
    try {
        const { userId, roleId } = req.body;
        await User.findOneAndUpdate({ _id: userId }, { $addToSet: { roles: roleId } });
        res.status(200).json({ message: "Role assigned to user successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};
