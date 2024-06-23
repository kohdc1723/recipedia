"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useLocalStorage } from "usehooks-ts";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import useSearchQuery from "@/app/hooks/use-search-query";
import SearchHistory from "../../_types/search-history";

export default function SearchBar() {
    const router = useRouter();

    const { searchParams, query, setQuery } = useSearchQuery();

    const [searchHistory, setSearchHistory] = useLocalStorage<SearchHistory>("searchHistory", []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const searchValue = e.currentTarget.query.value.trim();
        setQuery(searchValue);
        router.push(`/search?${searchParams.toString().replaceAll("+", "%20")}`);

        setSearchHistory(prev => {
            const updatedHistory = [
                { value: searchValue, timestamp: Date.now() },
                ...prev.filter(sv => sv.value !== searchValue)
            ];

            if (updatedHistory.length > 10) updatedHistory.pop();

            return updatedHistory;
        });
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex gap-3 "
        >
            <Input
                type="text"
                name="query"
                defaultValue={query}
                placeholder="food names or ingredients"
                className=" "
            />
            <Button
                type="submit"
                variant="default"
                className="font-normal"
            >
                Search
            </Button>
        </form>
    );
};