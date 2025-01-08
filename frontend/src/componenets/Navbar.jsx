import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { RiArrowDropDownLine } from "react-icons/ri";

const MenuList = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "About",
        link: "/about"
    },
    {
        id: 3,
        name: "Contact",
        link: "/contact"
    },
    {
        id: 4,
        name: "Shop",
        link: "/shop"
    },
    {
        id: 5,
        name: "Blogs",
        link: "/blogs"
    }
];

const DropMenu = [
    {
        id: 1,
        name: "HeadPhones",
        link: "/hp"
    },
    {
        id: 2,
        name: "whatches",
        link: "/watches"
    },
    {
        id: 3,
        name: "Laptop",
        link: "/laptop"
    }
];
const Navbar = ({ handlePopup }) => {
    return (
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            <div className="py-4">
                <div className="container flex justify-between items-center">
                    {/* ------------- logo section ------------------ */}
                    <div className="flex items-center gap-4">
                        <a
                            href=""
                            className="text-red-600 font-semibold tracking-wider text-2xl uppercase sm:text-3xl"
                        >
                            E-BAZAR
                        </a>

                        {/* -------------- menu --------------------------------*/}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-5">
                                {MenuList.map((data, index) => (
                                    <li key={index}>
                                        <a
                                            href={data.link}
                                            className="inline-block px-4 font-semibold text-gray-800 hover:text-black dark:text-white dark:hover:text-gray-400  duration-200"
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                <li className="realtive cursor-pointer group">
                                    <a
                                        className="flex items-center gap-[2px] font-semibold text-gray-400 dark:hover:text-white py-2"
                                        href="#"
                                    >
                                        Links
                                        <span><RiArrowDropDownLine className="group-hover:rotate-180 duration-300" /></span>
                                    </a>
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-4 dark:text-white">
                                        <ul className="space-y-2">
                                            {DropMenu.map((data, index) => (
                                                <>
                                                    <li key={index}>
                                                        <a
                                                            className="text-gray-500 inline-block hover:bg-red-400 p-2 w-full hover:rounded-md hover:text-black dark:hover:text-white duration-200"
                                                            href={data.link}
                                                        >
                                                            {data.name}
                                                        </a>
                                                    </li>
                                                </>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input type="text" placeholder="search" className="search-bar" />
                            <IoMdSearch className="text-xl text-gray-600 dark:text-gray-300 absolute top-1/2 -translate-y-1/2 right-4 hover:cursor-pointer group-hover:text-red-500" />
                        </div>
                        <button className="relative p-3" onClick={handlePopup}>
                            <FaCartShopping className="text-xl text-gray-600 dark:text-gray-300" />
                        </button>
                        <div>
                            <DarkMode />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
