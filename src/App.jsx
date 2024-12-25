import bgVideo from "./assets/earth-bg.mp4";
import { Navbar } from "./components/Navbar/Navbar";

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
            </div>
        </div>
    );
};
