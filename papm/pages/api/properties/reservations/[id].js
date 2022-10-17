import { NextApiRequest, NextApiResponse } from "next";
import Reservation from "../../../../models/reservationModel";
import connectMongo from "../../../../utils/connectMongo";

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function getReservationById(req, res) {
  if (req.method === "GET") {
    try {
      await connectMongo();
      const reservation = await Reservation.findById(req.query.id);
      res.json({ reservation, message: "getReservationById" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  if (req.method === "DELETE") {
    try {
      await connectMongo();
      const reservationId = await Reservation.findByIdAndDelete(req.query.id);
      res.json({ reservationId, message: "deleteReservationById" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }

  if (req.method === "PUT") {
    try {
      await connectMongo();
      let reservation = await Reservation.findByIdAndUpdate(
        req.query.id,
        req.body
      );
      res.json({ reservation, message: "editReservation" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
