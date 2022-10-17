import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Presta from "../components/Presta";
import Dashboard from "./dashboard";
import Pricing from "../components/Pricing";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("jwt");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <div>
          <Banner />
          <div id="Presta">
            <Presta />
          </div>
          <Pricing />
          <Footer />
        </div>
      )}
    </div>
  );
}
