import React from "react";

const Pricing = () => {
  return (
    <div className="bg-noir-50 dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-or-50 capitalize lg:text-4xl dark:text-white">
          Pricing Plan
        </h1>

        <p className="max-w-2xl mx-auto mt-4 text-center text-blanc-50 xl:mt-6 dark:text-gray-300">
          Choose the best way for your business
        </p>

        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700 hover:scale-110 duration-300">
            <p className="font-medium text-blanc-50 uppercase dark:text-gray-300">
              Starter Pack
            </p>

            <h2 className="text-5xl font-bold text-or-50 uppercase dark:text-gray-100">
              9.99€
            </h2>
            <p className="font-medium text-blanc-50 dark:text-gray-300">
              Per week
            </p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-or-100 rounded-md hover:bg-or-200 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>

          <div className="w-full p-8 space-y-8 text-center bg-noir-50  rounded-lg hover:scale-110 duration-300 border border-gray-200">
            <p className="font-medium text-gray-200 uppercase">
              Essential pack
            </p>

            <h2 className="text-5xl font-bold text-or-50 uppercase dark:text-gray-100">
              19.99€
            </h2>

            <p className="font-medium text-gray-200">Per month</p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-blanc-50 capitalize transition-colors duration-300 transform bg-or-100 rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
              Start Now
            </button>
          </div>

          <div className="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg  dark:border-gray-700 hover:scale-110  duration-300">
            <p className="font-medium text-blanc-50 uppercase dark:text-gray-300">
              Premium pack
            </p>

            <h2 className="text-5xl font-bold text-or-50 uppercase dark:text-gray-100">
              199.99€
            </h2>

            <p className="font-medium text-blanc-50 dark:text-gray-300">
              Per year
            </p>

            <button className="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-or-100 rounded-md hover:bg-or-200 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
