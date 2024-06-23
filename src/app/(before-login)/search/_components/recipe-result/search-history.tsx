"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { IoMdTime } from "react-icons/io";
import { Button } from "@/components/ui/button";
import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/en";
dayjs.locale("en");
dayjs.extend(relativeTime);

import type SearchHistory from "../../_types/search-history";

export default function SearchHistory() {
    const router = useRouter();

    const [localHistory] = useLocalStorage<SearchHistory>("searchHistory", []);

    const [history, setHistory] = useState<SearchHistory>([]);

    useEffect(() => {
        setHistory(localHistory);
    }, [localHistory]);

    const handleClick = (value: string) => router.push(`/search?q=${value}`);

    return (
        <div className="flex flex-col flex-1 bg-neutral-100 rounded-md p-3 gap-3 h-fit">
            <h4 className="font-bold text-lg text-lime-900 pl-3">
                Recent searches
            </h4>
            <div className="flex flex-col w-full">
                {history.map((h, index) => (
                    <Button
                        key={index}
                        onClick={() => handleClick(h.value)}
                        className="flex justify-between hover:bg-neutral-200"
                        variant="ghost"
                    >
                        <span className="flex gap-2 items-center text-base">
                            <IoMdTime className="text-xl" />
                            {h.value}
                        </span>
                        <span className="text-sm text-neutral-500">{dayjs(h.timestamp).fromNow()}</span>
                    </Button>
                ))}
                {history.length === 0 && (
                    <div className="text-neutral-500 text-center w-full">
                        History not found
                    </div>
                )}
            </div>
        </div>
    );
};