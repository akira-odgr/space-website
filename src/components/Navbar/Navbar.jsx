import Logo from "../../assets/logo.png";
import { navbarData } from "./navbarData";

export const Navbar = () => {
    return (
        <div
            data-aos="fade-down"
            className="bg-black/10 fixed top-0 right-0 w-full z-[9999] backdrop-blur-sm py-4 sm:py-4"
        >
            <div className="container">
                <div className="flex justify-between items-center text-white">
                    <div className="flex items-center">
                        <img src={Logo} alt="" className="w-10" />
                        <span className="uppercase">Tcj-space</span>
                    </div>
                    <div className="text-white hidden md:block">
                        <ul className="flex items-center gap-6 text-xl py-4">
                            {navbarData.map((data) => (
                                <li key={data.id}>
                                    <a href={data.link}>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="border-2 border-white px-3 py-1">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};
