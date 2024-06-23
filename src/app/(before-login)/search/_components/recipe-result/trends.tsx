"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Trends() {
    const router = useRouter();

    const trends = [
        { keyword: "pasta", count: 500 },
        { keyword: "salad", count: 400 },
        { keyword: "chicken", count: 300 },
        { keyword: "egg", count: 200 },
        { keyword: "sandwich", count: 100 },
    ];

    const handleClick = (value: string) => router.push(`/search?q=${value}`);

    return (
        <div className="flex flex-col flex-1 bg-neutral-100 rounded-md p-3 gap-3 h-fit">
            <h4 className="font-bold text-lg text-lime-900 pl-3">
                Trends
            </h4>
            <div className="flex flex-col w-full">
                {trends.map((t, index) => (
                    <Button
                        key={index}
                        onClick={() => handleClick(t.keyword)}
                        className="flex justify-between hover:bg-neutral-200"
                        variant="ghost"
                    >
                        <span className="text-base">{index + 1}. {t.keyword}</span>
                        <span className="text-sm text-neutral-500">{t.count} searches</span>
                    </Button>
                ))}
            </div>
        </div>
    );
};