import moment from "moment";
import React, { useEffect, useReducer, useState } from "react";
import AddFormBooking from "../../components/reservations/AddFormBooking";
import {
  apiGoogleKey,
  apiStreetViewUrl,
  apiUrl,
} from "../../constants/constants";

export default function Property({ property }) {
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [reservations, setReservations] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getReservations = async () => {
    const id = property.property._id;
    const res = await fetch(`${apiUrl}/properties/${id}/reservations`);
    const data = await res.json();
    setReservations(data);
  };

  useEffect(() => {
    getReservations();
    setIsLoading(false);
  }, [reducerValue]);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 min-h-screen bg-gradient-to-r from-gris-500">
          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2 border shadow rounded-3xl p-10 bg-gradient-to-l from-gris-500">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                {property.property.title}
              </h1>
              <p className="text-sm leading-4 font-medium text-white sm:text-or-50 dark:sm:text-slate-400">
                {property.property.description}
              </p>
            </div>
            <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
              <img
                src={property.property.imgUrl}
                alt=""
                className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                loading="lazy"
              ></img>
              <p className="text-indigo-500 sm:hidden">Street View</p>
              <img
                src={`${apiStreetViewUrl}?size=400x400&location=${property.property.lat},${property.property.lng}&fov=90&heading=90&pitch=0&key=${apiGoogleKey}`}
                alt=""
                className="w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
                loading="lazy"
              ></img>

              <img
                src={`${apiStreetViewUrl}?size=400x400&location=${property.property.lat},${property.property.lng}&fov=90&heading=270&pitch=0&key=${apiGoogleKey}`}
                alt=""
                className="w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
                loading="lazy"
              ></img>
            </div>
            <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
              <dt className="sr-only">Reviews</dt>
              <dd className="text-noir-100 flex items-center dark:text-indigo-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-people-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path
                    fill-rule="evenodd"
                    d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                  />
                  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
                <span>{property.property.numberGuest}</span>
              </dd>
              <dt className="sr-only">Location</dt>
              <dd className="flex items-center">
                <svg
                  width="2"
                  height="2"
                  aria-hidden="true"
                  fill="currentColor"
                  className="mx-3 text-slate-300"
                >
                  <circle cx="1" cy="1" r="1" />
                </svg>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 text-slate-400 dark:text-slate-500"
                  aria-hidden="true"
                >
                  <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                  <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                </svg>
                {property.property.fullAddress}
              </dd>
            </dl>
            <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
              <button className="bg-noir-50 text-white mx-16 sm:mx-16 text-sm leading-6 font-medium py-2 px-3 rounded-lg">
                <AddFormBooking
                  propertyId={property.property._id}
                  forceUpdate={forceUpdate}
                />
              </button>
            </div>
            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
              Bedrooms: {property.property.NumSleepingRoom}, Bathrooms:{" "}
              {property.property.NumBathroom}, Livingrooms:{" "}
              {property.property.NumLivingRoom}, Toilet:{" "}
              {property.property.NumToilet}, Kitchen:{" "}
              {property.property.NumKitchen}
            </p>
          </div>
          <div className="flex justify-center p-10 overflow-y-auto h-32">
            <table className="max-w-s table-auto pl-10">
              <thead>
                <tr className="bg-noir-50 text-or-50 uppercase text-sm leading-normal">
                  <td className="py-3 px-6 text-center">Checkin</td>
                  <td className="py-3 px-6 text-center">Checkout</td>
                  <td className="py-3 px-6 text-center">Guests</td>
                  <td className="py-3 px-6 text-center">Total Price</td>
                </tr>
              </thead>
              {reservations.reservations?.map((reservation) => (
                <tbody
                  key={reservation._id}
                  className="text-gray-600 text-sm font-light"
                >
                  <tr className="border-b border-or-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        {moment(reservation.checkin).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        {moment(reservation.checkout).format("DD/MM/YYYY")}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        {reservation.guests}
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left whitespace-nowrap">
                      <div className="flex items-center">
                        {reservation.pricePerNightPerGuest *
                          reservation.guests *
                          ((Date.parse(reservation.checkout) -
                            Date.parse(reservation.checkin)) /
                            (1000 * 60 * 60 * 24))}
                        €
                      </div>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </main>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`${apiUrl}/properties/${id}`);
  const property = await res.json();
  return {
    props: { property },
  };
}
