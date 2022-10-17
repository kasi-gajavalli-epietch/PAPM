import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { apiUrl } from "../constants/constants";
import { userRegisterSchema } from "../validations/UserValidation";

export default function Register() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      firstname: firstNameRef.current.value,
      lastname: lastNameRef.current.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    const isValid = await userRegisterSchema.isValid(formData);
    if (isValid) {
      try {
        const res = await fetch(`${apiUrl}/auth/register`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const user = await res.json();

        if (user.message === "registerNewUserError") {
          setMessage("Register Failed");
        }
        if (user.message === "New User Registered") {
          const res = await fetch(`${apiUrl}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          });
          const user = await res.json();
          window.localStorage.setItem("userId", user.userId);
          window.localStorage.setItem("jwt", user.jwt);
          window.location.href = "/";
          setMessage("Register Success");
        }
      } catch (err) {
        console.log(err);
      }
    } else if (!isValid) {
      setMessage("Invalid Input");
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]">
        <div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-lg">
          <form
            className="p-10 bg-noir-50 bg-opacity-80 rounded-xl drop-shadow-lg space-y-5"
            action="#"
            method="POST"
          >
            <div className="text-center opacity-75">
              <Image
                src="/Logo-HomeView.png"
                className="opacity-80"
                width={60}
                height={50}
                alt="logo"
              />
            </div>

            <label
              className="text-or-200 font-merriweather"
              htmlFor="firstname"
            >
              First Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center mb-2 pl-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="person-fill"
                  className="w-4 mr-4 text-or-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  ></path>
                </svg>
              </span>
              <input
                ref={firstNameRef}
                required="true"
                id="first-name"
                name="firstname"
                placeholder="Firstname"
                type="text"
                className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2"
              />
            </div>

            <label className="text-or-200 font-merriweather" htmlFor="lastname">
              Last Name
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center mb-2 pl-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="person-fill"
                  className="w-4 mr-4 text-or-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                  ></path>
                </svg>
              </span>
              <input
                ref={lastNameRef}
                required="true"
                id="firlastst-name"
                name="lastname"
                placeholder="Lastname"
                type="text"
                className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2"
              />
            </div>

            <label className="text-or-200 font-merriweather" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center mb-2 pl-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  className="w-4 mr-4 text-or-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
              </span>
              <input
                ref={emailRef}
                required="true"
                autoComplete="email"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2"
              />
            </div>

            <label className="text-or-200 font-merriweather" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center mb-2 pl-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="lock-fill"
                  className="w-4 mr-4 text-or-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
              </span>
              <input
                ref={passwordRef}
                required="true"
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2"
              />
            </div>

            <label className="text-or-200 font-merriweather" htmlFor="password">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center mb-2 pl-2">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="lock-fill"
                  className="w-4 mr-4 text-or-200"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M4 8V6a6 6 0 1 1 12 0h-3v2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
                  ></path>
                </svg>
              </span>
              <input
                ref={passwordRef}
                required="true"
                autoComplete="current-password"
                id="password"
                name="password"
                placeholder="••••••••"
                type="password"
                className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2"
              />
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full px-10 py-2 font-oswald bg-noir-200 bg-opacity-80 text-blanc-50 hover:text-or-200 focus:text-or-50 opacity-100 rounded-md sm:inline-block"
            >
              Create Account
            </button>

            <div className="flex space-x-10">
              <p className="text-left font-oswald text-blanc-50">
                Already have an account ?
              </p>
              <Link href="/login">
                <a className="text-or-200 hover:underline font-merriweather">
                  Login here
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
