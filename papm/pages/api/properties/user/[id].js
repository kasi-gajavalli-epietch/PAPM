import { NextApiRequest, NextApiResponse } from "next";
import Property from "../../../../models/propertyModel";
import connectMongo from "../../../../utils/connectMongo";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function getPropertiesByUserId(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongo();
      const properties = await Property.find({ userId: req.query.id });
      res.json({ properties, message: "getPropertiesByUserId" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
