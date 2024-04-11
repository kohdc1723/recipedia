"use client";

import { useSearchParams } from "next/navigation";

export default function useSearchQuery() {
    const searchParams = new URLSearchParams(useSearchParams());

    const query = decodeURIComponent(searchParams.get("q") || "");

    const setQuery = (value: string) => {
        if (!value) return;

        searchParams.set("q", value);
    };

    return { searchParams, query, setQuery };
};