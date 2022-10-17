import Link from "next/link";
import { useEffect, useState } from "react";
import { apiUrl } from "../constants/constants";

const WidgetProperties = () => {
  const [properties, setProperties] = useState([]);
  const [userId, setUserId] = useState();
  const [reservations, setReservations] = useState([]);
  const [status, setStatus] = useState();

  const getStatus = (checkin, checkout) => {
    const today = new Date();
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);

    if (today > checkoutDate) {
      return (
        <>
          <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
            Ended {checkoutDate.toLocaleDateString("fr-FR")}
          </span>
          <br />
        </>
      );
    } else if (today < checkinDate) {
      return (
        <>
          <span className="bg-indigo-200 text-indigo-600 py-1 px-3 rounded-full text-xs">
            Coming {checkinDate.toLocaleDateString("fr-FR")}
          </span>
          <br />
        </>
      );
    } else {
      return (
        <>
          <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
            In Progress Ends {checkoutDate.toLocaleDateString("fr-FR")}
          </span>
          <br />
        </>
      );
    }
  };

  const getProperties = async () => {
    const userId = window.localStorage.getItem("userId");
    setUserId(userId);
    const response = await fetch(`${apiUrl}/properties/user/${userId}`);
    const data = await response.json();
    setProperties(data);
  };

  const getReservations = async () => {
    const userId = window.localStorage.getItem("userId");
    setUserId(userId);
    const response = await fetch(`${apiUrl}/reservations/${userId}`);
    const data = await response.json();
    setReservations(data);
  };

  useEffect(() => {
    getProperties();
    getReservations();
  }, []);

  return (
    <div className="p-5">
      <table className="max-w-s overflow-scroll table-auto  ">
        <thead>
          <tr className="bg-noir-50 text-white uppercase text-sm leading-normal ">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-center ">Address</th>
            <th className="py-3 px-6 text-center">Rents</th>
          </tr>
        </thead>
        {properties.properties?.map((property) => (
          <Link key={property._id} href={`/properties/${property._id}`}>
            <tbody className="bg-noir-50 bg-opacity-80 text-sm font-light sm:items-center">
              <tr className="hover:bg-noir-200">
                <td className="py-3 px-6 text-left ">
                  <div className="flex items-center">
                    <div className="mr-2">
                      <img
                        className="w-6 h-6 rounded-full border border-or-100"
                        src={property.imgUrl}
                      />
                    </div>
                    <span className="font-medium font-merriweather text-lg text-white">
                      {property.title}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-6 text-left">
                  <div className="flex text-or-200 font-oswald">
                    <span>{property.fullAddress}</span>
                  </div>
                </td>
                <td className="py-3 px-6 text-center">
                  {reservations.reservations?.map((reservation) => {
                    if (reservation.propertyId === property._id) {
                      const status = getStatus(
                        reservation.checkin,
                        reservation.checkout
                      );
                      return <div key={reservation._id}>{status}</div>;
                    }
                  })}
                </td>
              </tr>
            </tbody>
          </Link>
        ))}
      </table>
    </div>
  );
};

export default WidgetProperties;
