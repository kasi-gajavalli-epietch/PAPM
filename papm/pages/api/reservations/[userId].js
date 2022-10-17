import { NextApiRequest, NextApiResponse } from "next";
import Reservation from "../../../models/reservationModel";
import connectMongo from "../../../utils/connectMongo";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function getReservationByUserId(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongo();
      const reservations = await Reservation.find({ userId: req.query.userId });
      res.json({ reservations, message: "getReservationsByUserId" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
