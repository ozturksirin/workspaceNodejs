
import { Order } from '../models/index.js';


export const createOrder = async (req, res) => {

    try {

        const { name, email, phone, address, city, orderItems, totalPrice } = req.body;

        const newOrder = await Order.create({ name, email, phone, address, city, orderItems, totalPrice });

        res.status(201).json(newOrder);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }


};