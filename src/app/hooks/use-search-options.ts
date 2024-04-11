"use client";

import { useSearchParams } from "next/navigation";

interface UseSearchOptionsProps {
    optionKey: string;
    multiple: boolean;
};

export default function useSearchOptions({
    optionKey,
    multiple
}: UseSearchOptionsProps) {
    const searchParams = new URLSearchParams(useSearchParams());
    const options = searchParams.has(optionKey) ? searchParams.get(optionKey)!.split(",") : [];

    const setSingleOption = (value: string | null) => {
        if (value === null) {
            searchParams.delete(optionKey);
        } else {
            if (options.length === 1 && options[0] === value) {
                searchParams.delete(optionKey);
            } else {
                searchParams.set(optionKey, value);
            }
        }
    };

    const setMultipleOptions = (value: string | null) => {
        if (value === null) {
            searchParams.delete(optionKey);
            return;
        }
    
        const updatedOptions = options.includes(value)
            ? options.filter(op => op !== value)
            : options.concat(value);
    
        if (updatedOptions.length === 0) {
            searchParams.delete(optionKey);
        } else {
            searchParams.set(optionKey, updatedOptions.join(","));
        }
    };

    return {
        searchParams,
        options,
        setOptions: multiple ? setMultipleOptions : setSingleOption
    };
};