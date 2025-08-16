import React from "react";
import { forms , seo } from "@/data/data";

export const metadata = {
    title: `Contact Me | ${seo.title}`,
    description: "Get in touch with me to discuss projects, collaborations, or just to say hello.",
    keywords: "contact, get in touch, collaboration, email, message, web developer"
};

function Contact() {
    return (
        <>
            <div className="md:w-[700px] w-[100%] mt-5 p-4">
                <main className="flex flex-col gap-2">
                    <h1 className="text-xl font-medium before:content-['>'] before:mr-1">
                        Contact Me
                    </h1>
                    <div className="p-1">
                        <form
                            action={forms.formspreeUrl}
                            method="POST"
                            className="flex flex-col"
                        >
                            <div>
                                <div>
                                    <span className="uppercase text-sm text-base-content/80 font-bold">
                                        Full Name
                                    </span>
                                    <input
                                        className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
                                        type="text"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <span className="uppercase text-sm text-base-content/80 font-bold">
                                        Email
                                    </span>
                                    <input
                                        className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
                                        type="email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <span className="uppercase text-sm text-base-content/80 font-bold">
                                        Message
                                    </span>
                                    <textarea
                                        className="w-full mt-1 p-3 rounded-lg focus:outline-none border border-base-content text-base-content/80 focus:shadow-outline"
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mt-2">
                                    <button className="uppercase text-sm font-bold tracking-wide bg-base-content text-base-100 p-3 cursor-pointer hover:bg-base-content/95 rounded-lg w-full focus:outline-none focus:shadow-outline">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
}

export default Contact;
