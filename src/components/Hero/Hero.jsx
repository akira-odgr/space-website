import MountainPng from "../../assets/moon-surface-hd.png";

export const Hero = () => {
    return (
        <section className="relative bg-black/20 h-full text-white z-50">
            <div className="flex justify-center items-center h-full">
                <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-4 max-w-[700px]">
                        <h1 className="text-5xl font-bold">Orbite The Earth</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dicta mollitia ad eaque adipisci cum minus
                            molestias maiores! Fugiat quibusdam amet in natus
                            fuga ab deserunt perferendis asperiores, officiis,
                            voluptatibus quia?
                        </p>
                        <button className="bg-blue-400 text-white hover:bg-blue-500 px-4 py-1 rounded-md duration-200">
                            Learn More
                        </button>
                    </div>
                    <div></div>
                </div>
            </div>
            {/* surgace section */}
            <img
                src={MountainPng}
                alt=""
                className="absolute bottom-0 right-0 w-full brightness-50 z-10"
            />

            {/* bottom gradient section */}
            <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent from-10% to-black to-90% h-[20px] sm:h-[50px] md:h-[60px]"></div>
        </section>
    );
};
