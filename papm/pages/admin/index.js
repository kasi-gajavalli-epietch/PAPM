import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Users from "../../components/admin/Users";

function Admin() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      const decoded = jwt_decode(token);
      const role = decoded.role;
      if (role !== "admin") {
        router.push("/404");
      }
    }else if (!token) {
      router.push("/404");
    }
  }, []);

  return (
    <div className="p-3 min-h-screen bg-gradient-to-r from-gris-500">
      <Users />
    </div>
  );
}

export default Admin;
