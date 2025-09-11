"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [hideOnMobile, setHideOnMobile] = useState(true);
    const pathname = usePathname();
    const [isDark, setIsDark] = useState(false);
    const blogs = pathname === "/blogs";

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setIsDark(savedTheme === "dark");
            document.documentElement.setAttribute("data-theme", savedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setIsDark(prefersDark);
            document.documentElement.setAttribute(
                "data-theme",
                prefersDark ? "dark" : "light"
            );
        }
    }, []);

    const handleThemeChange = (checked) => {
        const newTheme = checked ? "dark" : "light";
        setIsDark(checked);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <>
            <div className="flex justify-center sticky top-2 items-center gap-[25px] w-full z-10">
                <div className="w-[70%] sm:w-[80%] border flex items-center sm:justify-center justify-end bg-gray-10/50 backdrop-blur-sm rounded-3xl py-2 px-4">
                    <div className="flex items-center sm:gap-8 gap-5">
                        <div className="flex items-center gap-4">
                            <ul
                                className={`w-[90%] sm:w-full sm:flex-row flex-col sm:bg-transparent bg-base-200 backdrop-blur-sm sm:static fixed top-12 left-[5%] rounded-2xl sm:border-transparent
                                         border mx-auto items-center text-base sm:p-0 p-2 gap-2 sm:gap-4 ${
                                             hideOnMobile ? "hidden" : "flex"
                                         } sm:flex`}
                            >
                                <li>
                                    <Link
                                        href="/#about"
                                        className="hover:underline"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#projects"
                                        className="hover:underline"
                                    >
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/#experience"
                                        className="hover:underline"
                                    >
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:underline"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            <Link
                                href="/blogs"
                                className="hover:underline hidden sm:block"
                            >
                                Blogs
                            </Link>

                            <Link
                                href={blogs ? "/" : "/blogs"}
                                className="hover:underline block sm:hidden"
                            >
                                {blogs ? "Home" : "Blogs"}
                            </Link>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="flex sm:hidden"
                                onClick={() => {
                                    setHideOnMobile(!hideOnMobile);
                                }}
                            >
                                <span className="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                            <button className="flex">
                                <label className="toggle text-base-content toggle-sm">
                                    <input
                                        type="checkbox"
                                        checked={isDark}
                                        onChange={(e) =>
                                            handleThemeChange(e.target.checked)
                                        }
                                        className="theme-controller"
                                    />

                                    <svg
                                        aria-label="sun"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="4"
                                            ></circle>
                                            <path d="M12 2v2"></path>
                                            <path d="M12 20v2"></path>
                                            <path d="m4.93 4.93 1.41 1.41"></path>
                                            <path d="m17.66 17.66 1.41 1.41"></path>
                                            <path d="M2 12h2"></path>
                                            <path d="M20 12h2"></path>
                                            <path d="m6.34 17.66-1.41 1.41"></path>
                                            <path d="m19.07 4.93-1.41 1.41"></path>
                                        </g>
                                    </svg>

                                    <svg
                                        aria-label="moon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <g
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                            strokeWidth="2"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                                        </g>
                                    </svg>
                                </label>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
