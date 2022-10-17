import User from "../../../models/userModel";
import connectMongo from "../../../utils/connectMongo";
import bcrypt from "bcrypt";
import isAdmin from "../../../utils/isAdmin";

export default isAdmin(async function users({ method, body }, res) {
  if (method === "GET") {
    try {
      await connectMongo();
      const users = await User.find();
      res.json({ users, message: "getAllUsers" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
  if (method === "POST") {
    try {
      await connectMongo();
      const hashedPassword = await bcrypt.hash(body.password, 10);
      body.password = hashedPassword;
      const user = await User.create(body);
      res.json({ user, message: "addUser" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
});
