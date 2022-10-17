import React from "react";

const MobileNavBar = ({
  toggleMap,
  toggleProperties,
  data,
  bookings,
  toggleStats,
}) => {
  return (
    <div>
      <div className="sm:hidden max-w-max block p-2 m-4 left-48  sticky  gap-3 rounded-3xl bg-noir-50 backdrop-blur-lg">
        <div className="bg-transparent p-3 gap-4 rounded-lg flex">
          <button onClick={toggleProperties}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="w-4 text-or-50"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
              ></path>
            </svg>
          </button>
          <button onClick={toggleMap}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="w-4 text-or-50"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.502.502 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5V.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.498.498 0 0 0-.196 0L5 14.09zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1-.5-.1z"
              ></path>
            </svg>
          </button>
          <button onClick={toggleStats}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="w-4 text-or-50"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              ></path>
            </svg>
          </button>
          {/* <a href="#services">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="w-4 text-or-50"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>
      <div
        href="#"
        className="pl-2 mt-2 flex flex-row items-center h-12 w-full bg-noir-100 text-blanc-50"
      >
        <h1 className="text-lg font-bold font-merriweather">
          Total Properties
        </h1>
        <span className="text-lg text-or-50 ml-4 px-3 py-px">
          {data.properties?.length}
        </span>
      </div>
      <div
        href="#"
        className="pl-2 flex flex-row items-center h-12 w-full bg-noir-100 text-blanc-50"
      >
        <h1 className="text-lg font-bold font-merriweather">Total Bookings</h1>
        <span className="text-lg text-or-50 ml-4 px-3 py-px">
          {bookings.reservations?.length}
        </span>
      </div>
    </div>
  );
};

export default MobileNavBar;
