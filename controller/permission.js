import { Permission, Role } from '../models/index.js'


export const createPermission = async (req, res) => {
    try {
        const { permissionName, description } = req.body;
        const newPermission = new Permission({ permissionName, description });
        const savedPermission = await newPermission.save();
        res.status(200).json({
            message: "Permission created successfully",
            savedPermission,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
};

export const assignPermissionToRole = async (req, res) => {
    try {
        const { roleId, permissionId } = req.body;
        // Role şemasına permission atama
        await Role.findOneAndUpdate(
            { _id: roleId },
            { $addToSet: { permissions: permissionId } }
        );
        res.status(200).json({ message: "Permission assigned to role successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something went wrong", error });
    }
}

