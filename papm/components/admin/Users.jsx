import axios from "axios";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";
import { apiUrl } from "../../constants/constants";
import AddFormUser from "./forms/AddFormUser";

function Users() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);

  const handler = () => {
    setVisible(!visible);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/user/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      forceUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await axios.get(`${apiUrl}/user`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("jwt")}`,
        },
      });
      setUsers(usersFromServer.data.users);
    };
    getUsers();
  }, [reducerValue]);

  return (
    <>
      <div className="min-h-screen ">
        <button
          className="flex items-center p-2 m-4 bg-noir-50 text-xs text-or-200 uppercase font-merriweather font-bold border-2 border-or-50 hover:text-or-100 focus:text-or-50 rounded-md"
          onClick={handler}
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
                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              ></path>
              <path
                fill="currentColor"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              ></path>
            </svg>
          </span>
          Add User
        </button>

        {visible && <AddFormUser />}
        <div className="overflow-x-auto relative shadow-md rounded">
          <table className="w-full text-sm opacity-80 bg-noir-50 text-left">
            <thead className="text-xs text-or-100 uppercase font-merriweather font-bold">
              <tr>
                <th scope="col" className="py-3 px-6 flex items-center">
                  <div className="flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="person-fill"
                        className="w-4 mr-4"
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
                    Users
                  </div>
                </th>

                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        className="w-4 mr-4"
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
                    Email
                  </div>
                </th>

                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        className="w-4 mr-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                        ></path>
                      </svg>
                    </span>
                    Role
                  </div>
                </th>

                <th scope="col" className="py-3 px-6">
                  <div className="flex items-center">
                    <span>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="envelope"
                        className="w-4 mr-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="currentColor"
                          d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"
                        ></path>
                      </svg>
                    </span>
                    Action
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr
                    className="border-b border-t border-or-100"
                    key={user._id}
                  >
                    <th
                      scope="col"
                      className="py-4 px-6 font-merriweather text-blanc-50 whitespace-nowrap"
                    >
                      {user.firstname + " " + user.lastname}
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 font-oswald text-blanc-50"
                    >
                      {user.email}
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 font-oswald text-blanc-50"
                    >
                      {user.role}
                    </th>
                    <th
                      scope="col"
                      className="py-4 px-6 font-merriweather text-or-50"
                    >
                      <button onClick={() => deleteUser(user._id)}>
                        <a className="bg-noir-100 border-2 border-or-50 rounded-md p-1 hover:no-underlin mx-2">
                          Delete
                        </a>
                      </button>
                      <Link
                        href={{
                          pathname: "/user/[id]",
                          query: { id: user._id },
                        }}
                      >
                        <a className="bg-noir-100 border-2 border-or-50 rounded-md p-1 hover:no-underlin mx-2">
                          Edit
                        </a>
                      </Link>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
