import { useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import MobileNavBar from "../components/MobileNavBar";
import Sidebar from "../components/Sidebar";
import WidgetProperties from "../components/WidgetProperties";
import WidgetStats from "../components/WidgetStats";
import { apiUrl } from "../constants/constants";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [visibleMap, setVisibleMap] = useState(false);
  const [visibleProperties, setVisibleProperties] = useState(false);
  const [visibleStats, setVisibleStats] = useState(false);

  useEffect(() => {
    const data = fetch(
      `${apiUrl}/properties/user/${window.localStorage.getItem("userId")}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    const bookings = fetch(
      `${apiUrl}/reservations/${window.localStorage.getItem("userId")}`
    )
      .then((res) => res.json())
      .then((bookings) => {
        setBookings(bookings);
      });
  }, []);

  const toggleMap = () => {
    setVisibleMap(!visibleMap);
  };

  const toggleStats = () => {
    setVisibleStats(!visibleStats);
  };

  const toggleProperties = () => {
    setVisibleProperties(!visibleProperties);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAD0eMYODlMLxnRvVPyCKZbeudncPqNh7A",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-r from-gris-500 bg-cover bg-center">
        <div className="grid grid-cols-1 w-full h-full sm:flex min-h-screen">
          <div className="sm:hidden">
            <MobileNavBar
              toggleMap={toggleMap}
              toggleProperties={toggleProperties}
              toggleStats={toggleStats}
              data={data}
              bookings={bookings}
            />
          </div>
          <div className="hidden sm:contents sticky top-0 z-50">
            <Sidebar
              toggleMap={toggleMap}
              toggleProperties={toggleProperties}
              toggleStats={toggleStats}
              data={data}
              bookings={bookings}
            />
          </div>

          {visibleMap && <Map />}
          <div className="sm:block">
            {visibleProperties && <WidgetProperties />}
            {visibleStats && <WidgetStats />}
          </div>
        </div>
      </div>
    </>
  );
}
