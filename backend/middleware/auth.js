import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Token missing or malformed" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) return res.status(401).json({ success: false, message: "Token missing" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ success: false, message: "Expired token" })
        }
        return res.status(401).json({ success: false, message: "Invalid token" });
    }
};
export default verifyToken;