"use client";

import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";

import { Option } from "../_data/filter-options";
import useSearchOptions from "@/app/hooks/use-search-options";
import { useRouter } from "next/navigation";

interface MultiSelectProps {
    optionKey: string;
    title: string;
    options: Option[];
};

export default function MultiSelect({
    optionKey,
    title,
    options
}: MultiSelectProps) {
    const router = useRouter();

    const { searchParams, options: selectedOptions, setOptions } = useSearchOptions({
        optionKey,
        multiple: true
    });

    const isChecked = (value: string) => selectedOptions.includes(value);

    const handleOptionsChange = (value: string | null) => {
        setOptions(value);
        router.push(`/search?${searchParams.toString().replaceAll("+", "%20")}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={cn(
                "flex h-10 w-48 items-center justify-between rounded-md border border-neutral-200 px-3 py-2 text-sm hover:brightness-95 focus:outline-none",
                (selectedOptions.length === 0) ? "bg-white" : "bg-neutral-100"
            )}>
                <div className="flex items-center gap-2">
                    <span>{title}</span>
                    {(selectedOptions.length > 0) && (
                        <span className="flex items-center justify-center h-6 w-6 bg-black rounded-full text-white text-xs">
                            {selectedOptions.length}
                        </span>
                    )}
                </div>
                <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="h-fit w-48 flex flex-col gap-1 p-1">
                <ScrollArea className="h-40 pr-3">
                    {options.map(option => (
                        <Label
                            htmlFor={option.id}
                            key={option.id}
                            className="flex items-center gap-2 p-2 text-sm font-normal bg-white hover:brightness-95"
                        >
                            <Checkbox
                                id={option.id}
                                checked={isChecked(option.value)}
                                onCheckedChange={() => handleOptionsChange(option.value)}
                            />
                            {option.label}
                        </Label>
                    ))}
                </ScrollArea>

                <Separator />

                <Button
                    variant="default"
                    onClick={() => handleOptionsChange(null)}
                    className="text-sm font-normal h-fit w-fit py-1 px-3 self-end"
                >
                    reset
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};