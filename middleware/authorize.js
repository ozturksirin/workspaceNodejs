
import jwt from 'jsonwebtoken';

export const authorize = (req, res, next) => {

    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "==> Authorize Authentication failed!" });
    }

    try {
        const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        req.tokenPayload = payload;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "catch error => Authentication failed!" });
    }

}
