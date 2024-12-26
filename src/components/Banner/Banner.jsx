import sateliteImg from "../../assets/satelite1.jpg";

export const Banner = () => {
    return (
        <section className="relative  bg-black text-white pb-12 z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div>
                        <img
                            data-aos="zoom-in"
                            src={sateliteImg}
                            alt=""
                            className="w-full sm:w-[80%] mx-auto max-h-[350px] object-cover"
                        />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                        <p data-aos="fade-up" className="text-sky-800">
                            Our Mission
                        </p>
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="uppercase text-5xl"
                        >
                            Rapidcast
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium tempore est facere nemo fugiat
                            doloribus ullam ab! Dignissimos dolores voluptates
                            tempore, numquam nisi in cumque quo. Assumenda
                            temporibus, soluta quaerat illum neque pariatur,
                            repellendus quod porro iusto tenetur, veritatis
                            autem.
                        </p>
                        <button
                            data-aos="fade-up"
                            data-aos-delay="700"
                            className="primary-button"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
