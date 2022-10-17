import Link from "next/link";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants/constants";

function CardSimple({ reducerValue }) {
  const [properties, setProperties] = useState([]);
  const [userId, setUserId] = useState();

  const deleteProperty = (id) => {
    const popup = confirm("Are you sure you want to delete this property?");
    if (popup) {
      fetch(`${apiUrl}/properties/${id}`, {
        method: "DELETE",
      }).then(() => {
        getProperties();
      });
    }
  };

  const getProperties = async () => {
    const userId = window.localStorage.getItem("userId");
    setUserId(userId);
    const response = await fetch(`${apiUrl}/properties/user/${userId}`);
    const data = await response.json();
    setProperties(data);
  };

  useEffect(() => {
    getProperties();
  }, [reducerValue]);

  return (
    <div className="md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 p-5 sm:items-center">
      {properties.properties?.map((property) => (
        <div key={property._id}>
          <div className="max-w-md bg-blanc-50 rounded-xl shadow-md overflow-hidden md:max-w-s m-5 hover:scale-110 duration-300">
            <div className="md:flex">
              <Link href={`/properties/${property._id}`}>
                <div className="md:shrink-0">
                  <img
                    className="h-48 w-full object-cover md:h-full md:w-48"
                    src={property.imgUrl}
                    alt="Modern building architecture"
                  />
                </div>
              </Link>

              <div className="p-8">
                {/* button */}
                <div className="relative p-5">
                  <button
                    onClick={() => deleteProperty(property._id)}
                    type="button"
                    className="-m-5 text-or-50 hover:text-white border hover:bg-or-50 focus:ring-4 focus:outline-none focus:ring-or-50 font-medium rounded-lg text-sm px-2 py-1 text-center dark:border-or-50 dark:text-or-300 dark:hover:text-white dark:hover:bg-or-50 dark:focus:ring-or-50 absolute top-0 right-0"
                  >
                    X
                  </button>
                </div>
                <div className="flex uppercase tracking-wide text-xl text-or-50 font-semibold">
                  {property.title}
                </div>
                <a
                  href="#"
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                >
                  {property.description}
                </a>
                <br />
                <p>{property.fullAddress}</p>
                <div className="grid grid-cols-2"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardSimple;
