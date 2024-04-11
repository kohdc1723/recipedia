"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useSearchQuery from "@/app/hooks/use-search-query";

export default function SearchBar() {
    const router = useRouter();
    const { searchParams, query, setQuery } = useSearchQuery();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setQuery(e.currentTarget.query.value);
        router.push(`/search?${searchParams.toString().replaceAll("+", "%20")}`);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="flex gap-3"
        >
            <Input
                type="text"
                name="query"
                defaultValue={query}
                placeholder="food names or ingredients"
                className="w-80"
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