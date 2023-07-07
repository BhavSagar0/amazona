import jwt from "jsonwebtoken";
import config from "./config.js";

const getToken = (user) => {
    return jwt.sign(user, config.JWT_SECRET, {expiresIn: '48h'});
};

export {getToken};
