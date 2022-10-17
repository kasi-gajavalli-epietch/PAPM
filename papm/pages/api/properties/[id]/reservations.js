import { NextApiRequest, NextApiResponse } from "next";
import Reservation from "../../../../models/reservationModel";
import connectMongo from "../../../../utils/connectMongo";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function getReservationsByPropertyId(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongo();
      const reservations = await Reservation.find({ propertyId: req.query.id });
      res.json({ reservations, message: "getReservationsByPropertyId" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
