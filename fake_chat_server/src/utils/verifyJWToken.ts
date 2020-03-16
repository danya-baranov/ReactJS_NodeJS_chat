import jwt from "jsonwebtoken"

export default (token: string) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_SECRET || "", (err: jwt.VerifyErrors, decodedToken) => {
            if (err || !decodedToken) {
                return reject(err);
            }
            resolve(decodedToken);
        })
    })