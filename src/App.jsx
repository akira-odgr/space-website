import bgVideo from "./assets/earth-bg.mp4";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Services } from "./components/Services/Services";

export const App = () => {
    return (
        <div>
            <div className="relative h-[700px]">
                <video
                    autoPlay
                    loop
                    muted
                    className="fixed top-0 right-0 w-full h-[700px] object-cover -z-10"
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <Navbar />
                <Hero />
            </div>
            <Services />
        </div>
    );
};
