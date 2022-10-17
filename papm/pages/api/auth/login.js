import bcrypt from "bcrypt";
import cookie from "cookie";
import { sign } from "jsonwebtoken";
import User from "../../../models/userModel";
import connectMongo from "../../../utils/connectMongo";

export default async function login(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongo();
      const user = await User.find({ email: req.body.email });
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (!err && result) {
          const claims = {
            sub: user[0]._id,
            email: user[0].email,
            role: user[0].role,
          };
          const jwt = sign(claims, process.env.JWT_SECRET, { expiresIn: "1d" });
          res.setHeader(
            "Set-Cookie",
            cookie.serialize("auth", jwt, {
              httpOnly: true,
              secure: process.env.NODE_ENV !== "development",
              sameSite: "strict",
              maxAge: 3600,
              path: "/",
            })
          );
          const userId = user[0]._id;
          res.json({ userId, jwt, message: "loginUserSuccess" });
        } else {
          res.json({ message: "loginUserFailed" });
        }
      });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  } else {
    res.json({ message: "Method not allowed" });
  }
}
