import Link from "next/link";
import Image from "next/image";

import SearchBar from "./search-bar";
import Logo from "@/../public/logo.png";

export default function SearchHeader() {
    return (
        <header className="fixed top-0 w-full h-16 px-6 lg:px-12 flex justify-between items-center border-b bg-white">
            <div className="flex items-center gap-3">
                <Link
                    href="/"
                    className="flex items-center gap-10"
                >
                    <Image
                        src={Logo}
                        alt="logo"
                        className="w-10 h-10"
                    />
                </Link>
                
                <SearchBar />
            </div>
            <div>Auth</div>
        </header>
    );
};