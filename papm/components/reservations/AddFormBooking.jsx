import { useState } from "react";
import { apiUrl } from "../../constants/constants";

const AddFormBooking = ({ propertyId, forceUpdate }) => {
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("");
  const [pricePerNightPerGuest, setPricePerNightPerGuest] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = window.localStorage.getItem("userId");
    const res = await fetch(`${apiUrl}/properties/reservations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        checkin,
        checkout,
        propertyId,
        userId,
        guests,
        pricePerNightPerGuest,
      }),
    });
    const data = await res.json();
    forceUpdate();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="checkin">Checkin</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setCheckin(e.target.value)}
            value={checkin}
            id="checkin"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          ></input>
        </div>

        <label htmlFor="checkout">Checkout</label>

        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              ></path>
            </svg>
          </div>
          <input
            onChange={(e) => setCheckout(e.target.value)}
            value={checkout}
            id="checkout"
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          ></input>
        </div>

        <label htmlFor="guests">Guests</label>
        <input
          onChange={(e) => setGuests(e.target.value)}
          value={guests}
          type="number"
          id="guests"
          name="guests"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="1"
          min="0"
          required
        ></input>

        <label htmlFor="guests">Price</label>
        <input
          onChange={(e) => setPricePerNightPerGuest(e.target.value)}
          value={pricePerNightPerGuest}
          placeholder="Price"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="number"
          name="pricePerNightPerGuest"
          id="pricePerNightPerGuest"
          min="0"
          required
        />

        <button
          type="submit"
          className="bg-or-50 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-5 mb-2"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddFormBooking;
