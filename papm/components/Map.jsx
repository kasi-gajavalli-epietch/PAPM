import { GoogleMap, Marker } from "@react-google-maps/api";
import { useEffect, useMemo, useState } from "react";
import { apiUrl } from "../constants/constants";

// export async function getServerSideProps() {
//   const res = await fetch(`${apiUrl}/properties/user/${userId}`);
//   const data = await res.json();
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default function Map(props) {

  const [data, setData] = useState([]);

  const userId = window.localStorage.getItem("userId");

  useEffect(() => {
    fetch(`${apiUrl}/properties/user/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const center = useMemo(
    () => ({
      lat: 43.295,
      lng: 5.372,
    }),
    []
  );

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      {data.properties?.map((property) => (
        <Marker
          key={property._id}
          position={{
            lat: property.lat,
            lng: property.lng,
          }}
        />
      ))}
    </GoogleMap>
  );
}
