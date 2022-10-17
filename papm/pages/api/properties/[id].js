import { NextApiRequest, NextApiResponse } from "next";
import Property from "../../../models/propertyModel";
import connectMongo from "../../../utils/connectMongo";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function getPropertyById(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongo();
      const property = await Property.findById(req.query.id);
      res.json({ property, message: "getPropertyByid" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  if (req.method === "DELETE") {
    try {
      await connectMongo();
      const propertyId = await Property.findByIdAndDelete(req.query.id);
      res.json({ propertyId, message: "deletePropertyById" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  if (req.method === "PUT") {
    try {
      await connectMongo();
      let user = await Property.findByIdAndUpdate(req.query.id, req.body);
      res.json({ user, message: "editProperty" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
