
function Presta() {
    return (
        <section className="bg-noir-50">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl text-center text-or-100 capitalize lg:text-4xl font-merriweather font-extrabold">
                    HomeView
                </h1>
                <p className="mt-4 text-center text-blanc-50 font-oswald">
                    Offers you a personal space that provides a pleasant experience
                    and comfort for the management of your property through various services
                </p>
                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/addProperty.png')]">
                        <div
                            className="w-full h-full flex flex-col justify-end backdrop-blur-sm hover:backdrop-blur-none">
                            <h2 className="text-2xl text-or-200 bg-noir-50 bg-opacity-80 text-center lg:text-4xl font-merriweather">Register Your Properties</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/viewLocations.png')]">
                        <div
                            className="w-full h-full flex flex-col justify-end backdrop-blur-sm hover:backdrop-blur-none">
                            <h2 className="text-2xl text-or-200 bg-noir-50 bg-opacity-80 text-center lg:text-4xl font-merriweather">View Locations</h2>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('/viewBookings.png')]">
                        <div
                            className="w-full h-full flex flex-col justify-end backdrop-blur-sm hover:backdrop-blur-none">
                            <h2 className="text-2xl text-or-200 bg-noir-50 bg-opacity-80 text-center lg:text-4xl font-merriweather"> View Bookings</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Presta