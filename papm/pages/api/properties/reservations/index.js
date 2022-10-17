import Reservation from "../../../../models/reservationModel";
import connectMongo from "../../../../utils/connectMongo";

export default async function reservations({ method, body }, res) {
  if (method === "GET") {
    try {
      await connectMongo();
      const reservations = await Reservation.find();
      res.json({ reservations, message: "getAllReservations" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
  if (method === "POST") {
    try {
      await connectMongo();
      const reservation = await Reservation.create(body);
      res.json({ reservation, message: "addReservation" });
    } catch (err) {
      console.log(err);
      res.json({ err });
    }
  }
}
