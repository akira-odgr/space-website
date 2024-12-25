import { serviceData } from "./serviceData";
import wave from "../../assets/wave Gif.gif";

export const Services = () => {
    return (
        <section className="relative bg-black text-white z-50">
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 z-10">
                        {serviceData.map((data) => (
                            <div
                                key={data.id}
                                className="bg-sky-900/60 rounded-xl backdrop-blur-sm flex flex-col justify-center items-center min-h-[180px] text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                            >
                                {data.icon}
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className="text-sm">{data.desc}</p>
                            </div>
                        ))}
                    </div>

                    <img
                        src={wave}
                        alt=""
                        className="relative h-[200px] w-full object-cover mix-blend-screen -translate-y-24 z-[0]"
                    />
                </div>
            </div>
        </section>
    );
};
