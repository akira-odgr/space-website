import { HiLocationMarker } from "react-icons/hi";
import { MdMessage, MdCall } from "react-icons/md";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

export const footerLinkData = [
    {
        id: 1,
        link: "#",
        title: "Home",
    },
    {
        id: 2,
        link: "#",
        title: "About",
    },
    {
        id: 3,
        link: "#",
        title: "Services",
    },
    {
        id: 4,
        link: "#",
        title: "Login",
    },
];

export const footerContactData = [
    {
        id: 1,
        icon: <HiLocationMarker />,
        desc: "Noida, Uttar Pradesh",
    },
    {
        id: 2,
        icon: <MdMessage />,
        desc: "abc@gmail.com",
    },
    {
        id: 3,
        icon: <MdCall />,
        desc: "+91 123456789",
    },
];

export const footerSocialData = [
    {
        id: 1,
        link: "#",
        icon: <FaInstagram className="text-4xl" />,
    },
    {
        id: 2,
        link: "#",
        icon: <FaFacebook className="text-4xl" />,
    },
    {
        id: 3,
        link: "#",
        icon: <FaLinkedin className="text-4xl" />,
    },
];
