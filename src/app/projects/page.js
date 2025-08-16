import React from "react";
import { projects , seo } from "@/data/data";

export const metadata = {
    title: `Projects | ${seo.title}`,
    description: "Explore a curated collection of web development projects built with Next.js, React, and modern web technologies.",
    keywords: "projects, web development, Next.js, React, JavaScript, portfolio"
};

function Projects() {
    return (
        <div className="md:w-[700px] w-[100%] mt-5 p-4">
            <main className="flex flex-col gap-2">
                <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                    All Projects
                </h1>
                <div className="flex flex-col gap-2">
                    {projects.pinProjects.map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
                        >
                            <div className="flex flex-col gap-2 justify-between">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-lg">
                                        {item.title}
                                    </h2>
                                    <svg
                                        focusable="false"
                                        preserveAspectRatio="xMidYMid meet"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                        className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                                    </svg>
                                </div>
                                <p className="text-base-content/80 text-sm sm:text-base">
                                    {item.description}
                                </p>
                                <div className="flex items-center flex-wrap gap-2 mt-1">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                    {projects.otherProjects.map((item, index) => (
                        <a
                            href={item.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer p-4 border-2 border-base-content/20 hover:border-base-content/80 rounded-2xl hover:scale-102 transition-transform duration-200"
                        >
                            <div className="flex flex-col gap-2 justify-between">
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-lg">
                                        {item.title}
                                    </h2>
                                    <svg
                                        focusable="false"
                                        preserveAspectRatio="xMidYMid meet"
                                        fill="currentColor"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                        className="transform transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10 6L10 8 22.59 8 6 24.59 7.41 26 24 9.41 24 22 26 22 26 6 10 6z"></path>
                                    </svg>
                                </div>
                                <p className="text-base-content/80 text-sm sm:text-base">
                                    {item.description}
                                </p>
                                <div className="flex items-center flex-wrap gap-2 mt-1">
                                    {item.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs border-gray-400 font-medium text-base-content/70 border rounded-md px-4"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Projects;
