import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

import SearchBar from "./search-bar";
import Logo from "@/../public/logo.png";

export default function SearchHeader() {
    return (
        <header className="fixed top-0 w-full h-16 px-6 lg:px-12 flex justify-between items-center gap-3 border-b bg-white">
            <div className="flex items-center gap-3">
                <Link
                    href="/"
                    className="flex items-center gap-10"
                >
                    <Image
                        src={Logo}
                        alt="logo"
                        width={10}
                        height={10}
                        priority
                        className="min-w-10 min-h-10"
                    />
                </Link>
                
                <SearchBar />
            </div>
            <Link
                href="/login"
                className={buttonVariants({ variant: "outline" })}
            >
                Login
            </Link>
        </header>
    );
};