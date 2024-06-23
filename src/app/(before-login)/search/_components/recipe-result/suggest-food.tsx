"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function SuggestFood() {
    const router = useRouter();

    const suggests = [
        { keyword: "salad" },
        { keyword: "sandwich" },
        { keyword: "pasta" },
        { keyword: "pizza" },
        { keyword: "stew" },
    ];

    const handleClick = (value: string) => router.push(`/search?q=${value}`);

    return (
        <div className="flex flex-col flex-1 bg-neutral-100 rounded-md p-3 gap-3 h-fit">
            <h4 className="font-bold text-lg text-lime-900 pl-3">
                Suggests for you
            </h4>
            <div className="flex flex-col w-full">
                {suggests.map((t, index) => (
                    <Button
                        key={index}
                        onClick={() => handleClick(t.keyword)}
                        className="flex justify-start hover:bg-neutral-200"
                        variant="ghost"
                    >
                        <span className="text-base">{t.keyword}</span>
                    </Button>
                ))}
            </div>
        </div>
    );
};