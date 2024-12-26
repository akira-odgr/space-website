import { FaReact, FaShuttleSpace, FaSpaceAwesome } from "react-icons/fa6";

export const serviceData = [
    {
        id: 1,
        title: "HST",
        content: "300-1500km",
        desc: "Used for astronomical observations, capturing stunning images of the universe",
        icon: <FaReact className="text-7xl" />,
        aosDelay: "300",
    },
    {
        id: 2,
        title: "ISS",
        content: "500-1500km",
        desc: "Used for astronomical observations, capturing stunning images of the universe",
        icon: <FaShuttleSpace className="text-7xl" />,
        aosDelay: "500",
    },
    {
        id: 3,
        title: "GPS",
        content: "300-1500km",
        desc: "Used for astronomical observations, capturing stunning images of the universe",
        icon: <FaSpaceAwesome className="text-7xl" />,
        aosDelay: "700",
    },
];
