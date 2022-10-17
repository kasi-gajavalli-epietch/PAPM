import { useEffect, useState } from "react";
import { apiUrl } from "../constants/constants";

function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      setIsLoggedIn(true);
    } else if (isLoggedIn === false) {
      window.location.href = "/login";
    }
    const userId = localStorage.getItem("userId");
    fetch(`${apiUrl}/user/${userId}`)
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isLoggedIn]);

  return (
    isLoggedIn && (
      <div className="flex items-center bg-gradient-to-r from-gris-500 min-h-screen w-full justify-center ">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://avatars.githubusercontent.com/u/26740013?v=4"
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8 capitalize">
                {user.user?.firstname} {user.user?.lastname}
              </h3>

              <table className="text-xs my-3">
                <tbody>

                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">{user.user?.email}</td>
                  </tr>
                </tbody>
              </table>

            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ProfilePage;
