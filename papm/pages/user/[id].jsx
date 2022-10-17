import { useReducer, useState } from "react";
import { apiUrl } from "../../constants/constants";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

function UserById({ user }) {
  const [formData, setFormData] = useReducer(formReducer, {});

  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [role, setRole] = useState(user.role);

  const handleClick = () => {
    console.log(user);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      fetch(`${apiUrl}/user/${user.user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          role,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="mt-10 mx-4 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-noir-50 mt-10 mx-4 rounded px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-or-200 font-merriweather"
                      >
                        First name
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
                          value={firstname}
                          onChange={setFormData}
                          type="text"
                          name="firstname"
                          id="firstname"
                          autoComplete="firstname"
                          className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-or-200 font-merriweather"
                      >
                        Last name
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
                          value={lastname}
                          onChange={setFormData}
                          type="text"
                          name="lastname"
                          id="lastname"
                          autoComplete="family-name"
                          className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-or-200 font-merriweather"
                      >
                        Email address
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
                          value={email}
                          onChange={setFormData}
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-or-200 font-merriweather"
                      >
                        Role
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
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="currentColor"
                              d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                            ></path>
                          </svg>
                        </span>
                        <select
                          onChange={setFormData}
                          id="role"
                          name="role"
                          autoComplete="role"
                          className="w-96 px-7 py-2 mb-2 rounded-md font-oswald text-noir-50 bg-blanc-50 border-2 border-or-100 focus:border-or-100 focus:border-2 sm:text-sm"
                        >
                          <option value="">{role}</option>
                          <option value="admin">admin</option>
                          <option value="user">user</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 text-left sm:px-6">
                    <button
                      onClick={handleClick}
                      type="submit"
                      className="w-60 px-7 py-2 mb-2 font-oswald bg-noir-200 text-blanc-50 hover:text-or-200 focus:text-or-500 rounded-md sm:inline-block"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const user = await fetch(`${apiUrl}/user/${params.id}`).then((r) => r.json());
  return {
    props: user,
  };
}

export default UserById;
