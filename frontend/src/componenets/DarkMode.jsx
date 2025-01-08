import { useEffect, useState } from "react";
import { MdOutlineToggleOff } from "react-icons/md";
import { MdToggleOn } from "react-icons/md";

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;
    console.log(element);

    useEffect(() => {
        localStorage.getItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
            element.classList.add("dark");
        } else {
            element.classList.remove("light");
            element.classList.remove("dark");
        }
    });
    return (
        <div className="relative p-3">
            {theme === "light" ? (
                <>
                    <MdOutlineToggleOff
                        className={`cursor-pointer text-3xl ${theme === "dark" ? "opacity-0" : "opacity-100"
                            } transition-all duration-300`}
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    />
                </>
            ) : (
                <>
                    <MdToggleOn
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className={`cursor-pointer text-3xl`}
                    />
                </>
            )}
        </div>
    );
};

export default DarkMode;
