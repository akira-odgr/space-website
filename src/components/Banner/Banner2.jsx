import sateliteImg2 from "../../assets/satelite2.jpg";

export const Banner2 = () => {
    return (
        <section className="relative  bg-black text-white pb-12 z-50">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
                    <div className="sm:order-2">
                        <img src={sateliteImg2} alt="" />
                    </div>
                    <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800 sm:order-1">
                        <p className="text-sky-800">Our Mission</p>
                        <h1 className="uppercase text-5xl">Rapidcast</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Accusantium tempore est facere nemo fugiat
                            doloribus ullam ab! Dignissimos dolores voluptates
                            tempore, numquam nisi in cumque quo. Assumenda
                            temporibus, soluta quaerat illum neque pariatur,
                            repellendus quod porro iusto tenetur, veritatis
                            autem.
                        </p>
                        <button className="primary-button">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
