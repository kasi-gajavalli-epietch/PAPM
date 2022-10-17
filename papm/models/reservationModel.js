import { model, models, Schema } from "mongoose";

const reservationSchema = new Schema(
  {
    checkin: {
      type: Date,
      required: true,
    },

    checkout: {
      type: Date,
      required: true,
    },

    propertyId: {
      type: String,
      required: true,
    },

    userId: {
      type: String,
      required: true,
    },

    guests: {
      type: Number,
      default: "1",
    },

    pricePerNightPerGuest: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Reservation =
  models.Reservation || model("Reservation", reservationSchema);

export default Reservation;
