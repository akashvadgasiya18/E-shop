import { FaMobileAlt, FaFacebook } from "react-icons/fa";
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const links = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/about"
    },
    {
        title: "contact",
        link: "/contact"
    },
    {
        title: "Shop",
        link: "/shop"
    },
    {
        title: "Blog",
        link: "/blogs"
    },
]


const footer = () => {
    return (
        <div className="dark:bg-gray-700 mt-20">
            <div className="container">
                <div className="grid md:grid-cols-3 pb-20 pt-5">
                    <div className="py-8 px-4  ">
                        <a
                            href=""
                            className="text-red-600 font-semibold tracking-wider text-2xl uppercase sm:text-3xl">
                            E-BAZAR
                        </a>
                        <p className="text-gray-600 lg:pr-24 pt-3 dark:text-gray-400">
                            The official digital games store for the Nintendo Switch, where users can download games, demos, and applications. Users can also earn 5% back on digital purchases
                        </p>
                        <p className="text-gray-600 mt-4 font-bold dark:text-gray-100">
                            Made by Akash Patel
                        </p>
                        <a href="https://www.youtube.com" target="_blank" className="inline-block bg-red-500 text-white py-2 px-5 mt-8 rounded-full">Visite My Channel</a>
                    </div>

                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        <div className="py-8 px-4">
                            <h1 className="font-bold text-red-600 text-xl sm:text-left">IMPORTANAT LINKS</h1>
                            <ul className="space-y-2 mt-4">
                                {
                                    links.map((data, index) => (
                                        <>
                                            <li key={index}>
                                                <a href={data.link} className="text-gray-500 text-[18px] font-semibold hover:text-black dark:hover:text-white duration-300">{data.title}</a>
                                            </li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="py-8 px-4">
                            <h1 className="font-bold text-red-600 text-xl sm:text-left">QUICK LINKS</h1>
                            <ul className="space-y-2 mt-4">
                                {
                                    links.map((data, index) => (
                                        <>
                                            <li key={index}>
                                                <a href={data.link} className="text-gray-500 text-[18px] font-semibold hover:text-black dark:hover:text-white duration-300">{data.title}</a>
                                            </li>
                                        </>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <div>
                                <h1 className="font-bold text-red-600 text-xl sm:text-left">ADDRESS</h1>
                                <div className="flex items-center gap-3 mt-3 text-[18px] font-semibold">
                                    <FaLocationDot />
                                    <p>Vastral,Ahmedabbad</p>
                                </div>
                                <div className="flex items-center gap-3 mt-3 text-[18px] font-semibold">
                                    <FaMobileAlt />
                                    <p>+919887766555</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-6 pb-10">
                                <a href="#">
                                    <AiFillInstagram className="text-4xl hover:text-red-400 duration-500 dark:text-gray-50 dark:hover:text-red-500" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl hover:text-red-400 duration-500 dark:text-gray-50 dark:hover:text-red-500" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl hover:text-red-400 duration-500 dark:text-gray-50 dark:hover:text-red-500" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default footer;
