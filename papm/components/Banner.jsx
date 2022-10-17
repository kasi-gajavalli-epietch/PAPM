import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative bg-center bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)]">
      <div className="absolute inset-0 bg-transparent bg-gradient-to-r from-noir-100 sm:bg-transparent sm:bg-gradient-to-r sm:from-noir-100"></div>
      <div className="relative max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8 lg:h-screen lg:items-center lg:flex">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl font-merriweather text-blanc-50">
            Assists you with your
            <strong className="block font-merriweather text-or-50">
              Seasonal Rentals.
            </strong>
          </h1>
          <p className="max-w-lg mt-4 sm:leading-relaxed sm:text-xl text-or-200 font-merriweather">
            HomeView helps you manage your properties and your tenants.
            By using this service you will save time and money
            and you will be able to focus on your business.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-center">
            <Link href={"/register"}>
              <a className="block w-full px-12 py-3 text-sm font-oswald bg-noir-50 text-blanc-50 hover:text-or-200 focus:text-or-50 bg-opacity-80 rounded-md sm:inline-block sm:w-auto">
                Get Started
              </a>
            </Link>

            <a
              href="#Presta"
              className="block w-full px-12 py-3 text-sm font-oswald bg-noir-50 text-blanc-50 hover:text-or-200 focus:text-or-50 bg-opacity-80 rounded-md sm:inline-block sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
