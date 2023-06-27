import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import router from "./router/index.js"; // index.js içerisindeki router'ı import ediyoruz
import { authorize } from "./middleware/authorize.js";
import { verifyRole } from "./middleware/verifyRole.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my API</h1>");
});

app.use("/", router); // router'ı kullanıyoruz

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
    )
    .catch((error) => {
        console.log("server start", error.message)
    });
