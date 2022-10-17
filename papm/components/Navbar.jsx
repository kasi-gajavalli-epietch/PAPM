import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import jwt_decode from "jwt-decode";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { logOut } from "../utils/logOut";

const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Add Property", href: "/properties", current: false },
  // { name: "Projects", href: "#", current: false },
  // { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("jwt");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const user = localStorage.getItem("jwt");
    if (user) {
      const decoded = jwt_decode(user);
      if (decoded.role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

  return (
    <Disclosure
      as="nav"
      className="w-full bg-noir-50 bg-opacity-80 sticky top-0 z-30"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 text-or-50 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 focus:text-or-50 text-blanc-50">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <a className="flex flex-shrink-0 items-center">
                    <Image
                      src="/Logo-HomeView.png"
                      width={60}
                      height={50}
                      className="opacity-80 rounded-2xl"
                      alt="logo"
                    />
                  </a>
                </Link>

                <div className="hidden sm:ml-6 mt-2 sm:block">
                  <div className="flex space-x-4">
                    {isLoggedIn &&
                      navigation.map((item, i) => (
                        <Link href={item.href} key={i}>
                          <a
                            key={item.name}
                            className={classNames(
                              item.current
                                ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                                : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                              "px-3 py-2 rounded-md text-sm font-oswald"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-noir-50  text-sm focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://avatars.githubusercontent.com/u/26740013?v=4"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-52 origin-top-right rounded-md bg-noir-50 py-1 shadow-lg border-2 border-or-200 focus:outline-none">
                      {isLoggedIn ? (
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/profile">
                              <a
                                className={classNames(
                                  active
                                    ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                                    : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                                  "px-4 py-2 text-sm font-oswald flex items-center"
                                )}
                              >
                                <span>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="envelope"
                                    className="w-4 mr-4 text-or-50"
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
                                Profile
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ) : null}
                      {isAdmin ? (
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/admin">
                              <a
                                className={classNames(
                                  active
                                    ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                                    : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                                  "px-4 py-2 text-sm font-oswald flex items-center"
                                )}
                              >
                                <span>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="envelope"
                                    className="w-4 mr-4 text-or-50"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"
                                    ></path>
                                  </svg>
                                </span>
                                Admin Dashboard
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ) : null}
                      {!isLoggedIn && (
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/register">
                              <a
                                className={classNames(
                                  active
                                    ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                                    : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                                  "px-4 py-2 text-sm font-oswald flex items-center"
                                )}
                              >
                                <span>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="envelope"
                                    className="w-4 mr-4 text-or-50"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                    ></path>
                                  </svg>
                                </span>
                                Register
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                      {isLoggedIn ? (
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                                  : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                                "px-4 py-2 text-sm font-oswald flex items-center"
                              )}
                              onClick={logOut}
                            >
                              <span>
                                <svg
                                  aria-hidden="true"
                                  focusable="false"
                                  data-prefix="fas"
                                  data-icon="envelope"
                                  className="w-4 mr-4 text-or-50"
                                  role="img"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
                                  ></path>
                                </svg>
                              </span>
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      ) : (
                        <Menu.Item>
                          {({ active }) => (
                            <Link href="/login">
                              <a
                                className={classNames(
                                  active
                                    ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                                    : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                                  "px-4 py-2 text-sm font-oswald flex items-center"
                                )}
                              >
                                <span>
                                  <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="envelope"
                                    className="w-4 mr-4 text-or-50"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
                                    ></path>
                                  </svg>
                                </span>
                                Sign in
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50"
                      : "bg-noir-50 text-blanc-50 hover:bg-noir-200 hover:text-or-200 focus:text-or-50",
                    "block px-3 py-2 rounded-md text-base font-oswald"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
