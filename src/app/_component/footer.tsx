import Link from "next/link";
import { Separator } from "@/components/ui/separator";

import techStack from "@/constants/tech-stack";
import Logo from "./logo";

export default function Footer() {
    return (
        <footer className="w-full px-6 lg:px-12 py-5 flex flex-col bg-lime-700 text-white text-sm">
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center">
                <div className="flex flex-col items-center justify-center w-full lg:w-1/3 gap-3">
                    <Logo fontSize={32} color="#FFFFFF" />
                    <p className="text-center">
                        Recipedia provides a extensive recipe search engine and recipe recommendations based on ingredients you have at home.
                    </p>
                </div>
                <div className="flex justify-end w-full lg:w-2/3">
                    <div className="flex justify-center flex-1">
                        <div className="flex flex-col">
                            <h6 className="text-base font-bold">Built with</h6>
                            <ul>
                                {techStack.map(tech => (
                                    <li key={tech.skill}>
                                        <Link
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:brightness-90"
                                        >
                                            {tech.skill}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center flex-1">
                        <div className="flex flex-col">
                            <h6 className="text-base font-bold">Powered by</h6>
                            <ul>
                                <li>
                                    <Link
                                        href="https://www.edamam.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:brightness-90"
                                    >
                                        Edamam
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-5" />

            <p className="flex justify-center">
                2024 Recipedia
            </p>
        </footer>
    );
};