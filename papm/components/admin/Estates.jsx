import Image from "next/image";
import { useRef } from "react";

function Estates() {
  const nameRef = useRef();
  return (
    <>
      <div className="w-screen h-screen flex justify-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 sm:bg-transparent sm:from-noir-100"></div>
        <form className="p-10 bg-noir-50 opacity-75 rounded-xl drop-shadow-lg space-y-5" action="#" method="POST">
          <div className="text-center opacity-75">
            <Image src="/Logo-PAPM.png" width={60} height={50} alt="logo" />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-or-200 font-merriweather" htmlFor="email">Name</label>
            <input className="w-96 px-3 py-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2"
              type="name" placeholder="Name" name="name" id="name" autoComplete="name" required="true" ref={nameRef} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Estates;
