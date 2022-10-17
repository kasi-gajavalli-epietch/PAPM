import User from "../../../models/userModel";
import connectMongo from "../../../utils/connectMongo";
import { NextApiRequest, NextApiResponse } from "next";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function getUserById(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongo();
      const user = await User.findById(req.query.id);
      res.json({ user, message: "getUserById" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  if (req.method === "DELETE") {
    try {
      await connectMongo();
      const userId = await User.findByIdAndDelete(req.query.id);
      res.json({ userId, message: "deleteUserById" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  if (req.method === "PUT") {
    try {
      await connectMongo();
      let user = await User.findByIdAndUpdate(req.query.id, req.body);
      res.json({ user, message: "editUser" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
