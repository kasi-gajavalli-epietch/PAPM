import React from "react";

import axios from "axios";
import { useState } from "react";
import { apiGeocodeUrl, apiGoogleKey, apiUrl } from "../../constants/constants";

const FormLoc = ({forceUpdate}) => {

  const [fullAddress, setFullAddress] = useState("");
  const [address, setAddress] = useState("");
  const [NumSleepingRoom, setNumSleepingRoom] = useState("");
  const [NumKitchen, setNumKitchen] = useState("");
  const [NumLivingRoom, setNumLivingRoom] = useState("");
  const [NumBathroom, setNumBathroom] = useState("");
  const [NumToilet, setNumToilet] = useState("");
  const [userId, setUserId] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [numberGuest, setNumberGuest] = useState("");

  const geocode = () => {
    axios
      .get(apiGeocodeUrl, {
        params: {
          address: address,
          key: apiGoogleKey,
        },
      })
      .then(function (response) {
        setLat(response.data.results[0].geometry.location.lat);
        setLng(response.data.results[0].geometry.location.lng);
        setFullAddress(response.data.results[0].formatted_address);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  async function addLocation() {
    geocode();
    setUserId(localStorage.getItem("userId"));
    const res = await fetch(`${apiUrl}/properties`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullAddress,
        lat,
        lng,
        NumSleepingRoom,
        NumKitchen,
        NumLivingRoom,
        NumBathroom,
        NumToilet,
        userId,
        title,
        description,
        imgUrl,
        numberGuest,
      }),
    });
    const data = await res.json();
    forceUpdate();
  }

  return (
    <div className="flex flex-col p-1">
      <section className="max-w-4xl mt-6 p-6 mx-auto bg-transparent rounded-md shadow-md h-full w-full bg-clip-padding backdrop-filter backdrop-blur-sm bg-gradient-to-l from-gris-500 border border-gray-100">
        <h2 className="text-lg font-semibold text-noir-50 capitalize dark:text-white">
          Add properties
        </h2>

        <form>
          <div className="sm:grid sm:grid-cols-4 sm:gap-2 sm:mt-4 ">
            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="address"
              >
                Address
              </label>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                id="address"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="title"
              >
                Title
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="description"
              >
                Description
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="image"
              >
                Image
              </label>
              <input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                id="image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="sm:grid sm:grid-cols-6 sm:gap-6 sm:mt-4 sm:mb-4 grid grid-cols-2  ">
            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="numberGuest"
              >
                Guests
              </label>
              <input
                value={numberGuest}
                onChange={(e) => setNumberGuest(e.target.value)}
                id="numberGuest"
                placeholder="0"
                type="number"
                className="block w-20 px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="bedroom"
              >
                Bedroom
              </label>
              <input
                value={NumSleepingRoom}
                onChange={(e) => setNumSleepingRoom(e.target.value)}
                id="bedroom"
                placeholder="0"
                type="number"
                className="block w-20 px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="Livingroom"
              >
                Livingroom
              </label>
              <input
                value={NumLivingRoom}
                onChange={(e) => setNumLivingRoom(e.target.value)}
                id="Livingroom"
                placeholder="0"
                type="number"
                className="block w-20 px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="Kitchen"
              >
                Kitchen
              </label>
              <input
                value={NumKitchen}
                onChange={(e) => setNumKitchen(e.target.value)}
                id="Kitchen"
                placeholder="0"
                type="number"
                className="block w-20 px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="Toilet"
              >
                Toilet
              </label>
              <input
                value={NumToilet}
                onChange={(e) => setNumToilet(e.target.value)}
                id="Toilet"
                placeholder="0"
                type="number"
                className="block w-20 px-4 py-2 mt-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-noir-50 font-semibold dark:text-gray-200"
                htmlFor="Bathroom"
              >
                Bathroom
              </label>
              <input
                value={NumBathroom}
                onChange={(e) => setNumBathroom(e.target.value)}
                id="Bathroom"
                placeholder="0"
                type="number"
                className="block w-20 px-4 py-2 mt-2 mb-2 text-noir-50 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
        </form>
        <button
          onClick={() => {
            addLocation({
              NumBathroom: NumBathroom,
              NumKitchen: NumKitchen,
              NumLivingRoom: NumLivingRoom,
              NumSleepingRoom: NumSleepingRoom,
              NumToilet: NumToilet,
              userId: userId,
            });
          }}
          className="w-full px-4 py-2 text-sm font-medium bg-noir-50 text-blanc-50 uppercase transition-colors duration-200 transform bg-primary-600 rounded-md hover:before:border-noir-50 focus:outline-none focus:bg-primary-500"
        >
          Add
        </button>
      </section>
    </div>
  );
};

export default FormLoc;
