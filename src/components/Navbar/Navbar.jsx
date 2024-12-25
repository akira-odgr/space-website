import Logo from "../../assets/logo.png";
import { navbarData } from "./navbarData";

export const Navbar = () => {
    return (
        <div className="bg-black/10 fixed top-0 right-0 w-full z-50 backdrop-blur-sm py-4 sm:py-4">
            <div className="container">
                <div className="flex">
                    <div className="flex">
                        <img src={Logo} alt="" className="w-10" />
                    </div>
                    <div className="text-white">
                        <ul className="flex items-center gap-6 text-xl py-4">
                            {navbarData.map((data) => (
                                <li key={data.id}>
                                    <a href={data.link}>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
