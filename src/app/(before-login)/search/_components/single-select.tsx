"use client";

import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { Option } from "../_data/filter-options";
import useSearchOptions from "@/app/hooks/use-search-options";

interface SingleSelectProps {
    optionKey: string;
    title: string;
    options: Option[];
};

export default function SingleSelect({
    optionKey,
    title,
    options
}: SingleSelectProps) {
    const router = useRouter();

    const { searchParams, options: selectedOptions, setOptions } = useSearchOptions({
        optionKey,
        multiple: false
    });

    const handleOptionsChange = (value: string | null) => {
        setOptions(value);
        router.push(`/search?${searchParams.toString().replaceAll("+", "%20")}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn(
                "flex h-10 w-48 items-center justify-between rounded-md border border-neutral-200 px-3 py-2 text-sm hover:brightness-95 focus:outline-none",
                !selectedOptions.length ? "bg-white" : "bg-neutral-200"
            )}>
                {selectedOptions.length ? selectedOptions[0] : title}
                <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-fit w-48 flex flex-col gap-1 p-1">
                <ScrollArea className="h-40 pr-3">
                    {options.map(option => (
                        <div
                            key={option.id}
                            onClick={() => handleOptionsChange(option.value)}
                            className={cn(
                                "flex items-center gap-2 p-2 text-sm font-normal hover:brightness-95 hover:cursor-pointer",
                                (selectedOptions[0] === option.value) ? "bg-neutral-200" : "bg-white"
                            )}
                        >
                            {option.label}
                        </div>
                    ))}
                </ScrollArea>

                <Separator />

                <Button
                    variant="default"
                    onClick={() => handleOptionsChange(null)}
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "text-sm font-normal h-fit w-fit py-1 px-3 self-end"
                    )}
                >
                    reset
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};