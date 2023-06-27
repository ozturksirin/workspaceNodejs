import { User } from '../models/index.js'

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";



export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const CreateUsersRegister = async (req, res) => {
    const { name, email, password, passwordAgain, phone, address, city } = req.body;
    try {
        const userCheeck = await User.findOne({ name, email }); // name ile arama yapar
        if (userCheeck && userCheeck.name) { // eğer name varsa
            return res.status(400).json({ message: "User already exists." });
        }
        if (userCheeck && userCheeck.email) { // eğer email varsa
            return res.status(400).json({ message: "Email already exists." });
        }
        if (password.length < 6) { // 6 karakterden az olamaz
            return res.status(400).json({ message: "Password must be at least 6 characters." });
        }
        if (password !== passwordAgain) { // şifreler eşleşmiyorsa
            return res.status(400).json({ message: "Passwords don't match." });
        }
        const hashedPassword = await bcrypt.hash(password, 10); // şifreleme
        const newUser = await User.create({ name, email, password: hashedPassword, phone, address, city }); // kayıt oluştur
        const token = jwt.sign({ email: newUser.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }); // token oluştur
        res.status(201).json({
            newUser,
            token
        });
    }
    catch (error) {
        res.status(409).json({
            message: error.message
        });
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body; // gelen bilgileri al
    try {
        const user = await User.findOne({ email }); // email ve password ile arama yap

        if (!user) { // eğer kullanıcı yoksa
            return res.status(404).json({ message: "User doesn't exist." });
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password); // şifreleri karşılaştır
        if (!isPasswordCorrect) { // eğer şifre yanlışsa
            return res.status(400).json({ message: "Invalid credentials." });
        }
        const token = jwt.sign({ email: user.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN }); // token oluştur
        res.status(200).json({ user, token }); //kullanıcıyı ve tokeni döndür
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

// export const CreateAdminUser = async (req, res) => {
//     const { email, password, passwordAgain } = req.body;

//     try {
//         const adminCheeck = await User.findOne({ email });
//         if (adminCheeck && adminCheeck.email) {
//             return res.status(400).json({ message: "Email already exists." });
//         }
//         if (password.length < 6) {
//             return res.status(400).json({ message: "Password must be at least 6 characters." });
//         }
//         if (password !== passwordAgain) {
//             return res.status(400).json({ message: "Passwords don't match." });
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);
//         const newAdmin = await User.create({ email, password: hashedPassword, status: 1 });

//         const token = jwt.sign({ email: newAdmin.email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

//         res.status(201).json({
//             newAdmin,
//             token
//         });

//     }
//     catch (error) {
//         res.status(409).json({
//             message: error.message
//         });
//     }
// }


