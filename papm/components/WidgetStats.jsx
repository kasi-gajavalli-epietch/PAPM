import { useState, useEffect } from "react";
import { apiUrl } from "../constants/constants";

function WidgetStats() {
  const [reservations, setReservations] = useState([]);
  const [daysRented, setDaysRented] = useState(0);
  const [guestsNumber, setGuestsNumber] = useState(0);
  const [totalEarnings, setTotalEarnings] = useState(0);

  useEffect(() => {
    const reservations = fetch(
      `${apiUrl}/reservations/${window.localStorage.getItem("userId")}`
    )
      .then((res) => res.json())
      .then((reservations) => {
        setReservations(reservations);
        var totalDaysOfRentByReservation = [];
        reservations.reservations?.map((reservation) => {
          var days =
            Date.parse(reservation.checkout) - Date.parse(reservation.checkin);
          totalDaysOfRentByReservation.push(days / (1000 * 60 * 60 * 24));
        });
        var totalDays = totalDaysOfRentByReservation.reduce((a, b) => a + b, 0);
        setDaysRented(totalDays);
        var totalGuests = reservations.reservations?.reduce(
          (a, b) => a + b.guests,
          0
        );
        setGuestsNumber(totalGuests);

        var totalEarnings = reservations.reservations?.reduce(
          (a, b) => a + b.pricePerNightPerGuest * b.guests * totalDays,
          0
        );
        setTotalEarnings(totalEarnings);
      });
  }, []);

  return (
    <div className="sm:grid sm:grid-cols-3 sm:h-8">
      <div className="flex flex-col sm:grid sm:grid-cols-1 sm:h-30px rounded-3xl border border-or-50 shadow-lg items-center m-5 bg-noir-50 bg-opacity-80">
        <div className="flex flex-col justify-between items-center p-4">
          <div className="flex flex-col m-5">
            <span className="text-white">Total Earnings</span>
            <span className="text-2xl font-bold flex justify-center text-or-50">
              {totalEarnings} €
            </span>
          </div>
          
        </div>
      </div>
      <div className="flex flex-col sm:h-30px rounded-3xl border border-or-50 shadow-lg items-center m-5 bg-noir-50 bg-opacity-80">
        <div className="flex flex-col justify-between items-center p-4">
        <div className="flex flex-col m-5">
            <span className="text-white">Total Guests</span>
            <span className="text-2xl font-bold flex justify-center text-or-50">
              {guestsNumber}
            </span>
          </div>
          </div>
        </div>
        <div className="flex flex-col sm:h-30px rounded-3xl border border-or-50 shadow-lg items-center m-5 bg-noir-50 bg-opacity-80">
        <div className="flex flex-col justify-between items-center p-4">
        <div className="flex flex-col m-5">
            <span className="text-white">Total Days Rented</span>
            <span className="text-2xl font-bold flex justify-center text-or-50">
              {daysRented}
            </span>
          </div>
          </div>
        </div>
    </div>
  );
}
export default WidgetStats;
