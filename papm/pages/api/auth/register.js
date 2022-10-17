import bcrypt from "bcrypt";
import User from "../../../models/userModel";
import connectMongo from "../../../utils/connectMongo";

export default async function register(req, res) {
  if (req.method === "POST") {
    try {
      await connectMongo();
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      req.body.password = hashedPassword;
      const user = await User.create(req.body);
      res.json({ user, message: "New User Registered" });
    } catch (err) {
      if (err.message.includes("duplicate key error")) {
        res.json({ message: "Sorry account already exists" });
      }
      res.json({ error: err.message, message: "registerNewUserError" });
    }
  } else {
    res.json({ message: "Not allowed..." });
  }
}
