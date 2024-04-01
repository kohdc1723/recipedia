import Image from "next/image";
import Link from "next/link";

import BgPrimary from "@/../public/bg-primary.png";

export default function WelcomePage() {
    return (
        <main className="min-h-dvh flex flex-col lg:flex-row gap-10 py-32 lg:py-16 px-6 lg:px-20">
            <div className="flex flex-col justify-center items-center lg:items-start flex-1 gap-5">
                <h2 className="text-3xl lg:text-4xl text-lime-700 font-bold">Welcome to Recipedia</h2>
                <div className="text-xl lg:text-2xl font-bold">
                    <p className="text-center lg:text-left">
                        Search for extensive recipes
                    </p>
                    <p className="text-center lg:text-left">
                        by ingredients or food names.
                    </p>
                </div>
                <div className="text-xl lg:text-2xl font-bold">
                    <p className="text-center lg:text-left">
                        Get recipe recommendations
                    </p>
                    <p className="text-center lg:text-left">
                        based on ingredients in your fridge
                    </p>
                    <p className="text-center lg:text-left">
                        or your favourite foods.
                    </p>
                </div>
                <div className="flex items-center gap-3 text-base font-bold">
                    <Link
                        href="/search"
                        className="bg-lime-700 w-fit px-4 lg:px-5 py-3 text-white text-sm lg:text-base rounded-lg font-bold hover:brightness-90"
                    >
                        Search Recipes Now
                    </Link>
                    <Link
                        href="/register"
                        className="bg-black w-fit px-4 lg:px-5 py-3 text-white text-sm lg:text-base rounded-lg font-bold hover:brightness-90"
                    >
                        Join Recipedia
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center flex-1">
                <Image
                    src={BgPrimary}
                    alt="bg-primary"
                    height={400}
                    width={400}
                />
            </div>
        </main>
    );
};