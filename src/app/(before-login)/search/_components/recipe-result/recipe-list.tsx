"use client";

import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { InfiniteQueryObserverResult, InfiniteData } from "@tanstack/react-query";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DoubleArrowDownIcon, Cross1Icon } from "@radix-ui/react-icons";
import ClipLoader from "react-spinners/ClipLoader";

import RecipeSearchResponse from "../../_types/recipe-search-response";
import RecipeItem from "./recipe-item";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import RecipeDetail from "./recipe-detail";
import RequestParams from "../../_types/request-params";

interface RecipeListProps {
    data: InfiniteData<RecipeSearchResponse>;
    isFetching: boolean;
    isFetchingNextPage: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => Promise<InfiniteQueryObserverResult<InfiniteData<RecipeSearchResponse, unknown>, Error>>;
    isAboveLarge: boolean;
    requestParams: RequestParams;
    currentId: string;
};

export default function RecipeList({
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isAboveLarge,
    requestParams,
    currentId
}: RecipeListProps) {
    const { ref, inView } = useInView({
        threshold: 1,
        delay: 0
    });

    useEffect(() => {
        if (inView) fetchNextPage();
    }, [inView]);

    const total = data.pages.at(-1)?.count;
    const to = data.pages.at(-1)?.to;

    return (
        <div className="flex-1">
            <div className="bg-black text-white text-sm p-3">
                {total} results (1 - {to})
            </div>
            <ScrollArea className="h-[calc(100dvh-172px)] border">
                {data.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page.hits.map((hit, index) => (
                            <RecipeItem recipe={hit} key={index} />
                        ))}
                    </Fragment>
                ))}
                <div ref={ref} className="w-full h-24 flex justify-center items-center text-lg border">
                    {hasNextPage ? (isFetchingNextPage ? (
                        <div className="flex justify-center items-center gap-3 text-base">
                            <ClipLoader
                                color="black"
                                loading={true}
                                size={30}
                            />
                        </div>
                    ) : (
                        <div className="flex justify-center items-center gap-3 text-base">
                            Load More
                            <DoubleArrowDownIcon className="w-6 h-6" />
                        </div>
                    )) : (
                        <div className="flex justify-center items-center gap-3 text-base">
                            No More Result
                            <Cross1Icon className="w-6 h-6" />
                        </div>
                    )}
                </div>
            </ScrollArea>
        </div>
    );
};