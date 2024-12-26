import {
    footerLinkData,
    footerContactData,
    footerSocialData,
} from "./footerData";

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white px-5">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 py-5">
                    {/* first col */}
                    <div className="py-8 px-4">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-light mb-3">
                            Be Ready To Grow
                        </h1>
                        <p>
                            GetExclusive
                            <span className="font-bold">Update</span>
                            straigt to your inbox.
                        </p>
                        <br />
                        <div className="flex items-center h-10 gap-1">
                            <input
                                type="text"
                                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-transparent border-gray-200 border-2"
                                placeholder="Email"
                            />
                            <button className="primary-button h-full">
                                OK
                            </button>
                        </div>
                    </div>

                    {/* second col */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Quick Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {footerLinkData.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Quick Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {footerLinkData.map((data) => (
                                        <li key={data.id}>
                                            <a href={data.link}>{data.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="py-8 px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Contact Us
                                </h1>
                            </div>
                            <div className="flex flex-col gap-3">
                                {footerContactData.map((data) => (
                                    <div
                                        key={data.id}
                                        className="flex items-center gap-2"
                                    >
                                        {data.icon}
                                        <p>{data.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* bottom section */}
                <div className="hidden sm:block">
                    <div className="flex justify-between items-center py-6 border-t-2 border-gray-400">
                        <div className="text-sm text-gray-400 ">
                            <span>copyright &copy; 2024 by TCJ</span>
                        </div>
                        <div className="flex justify-center items-center gap-4 mb-4">
                            {footerSocialData.map((data) => (
                                <a key={data.id} href={data.link}>
                                    {data.icon}
                                </a>
                            ))}
                        </div>
                        <span className="text-sm text-gray-400">
                            <ul className="flex gap-3">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
