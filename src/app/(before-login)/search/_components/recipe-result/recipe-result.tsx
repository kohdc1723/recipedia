"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useInfiniteQuery, InfiniteData } from "@tanstack/react-query";
import { useMediaQuery } from "usehooks-ts";
import ClipLoader from "react-spinners/ClipLoader";
import { MdErrorOutline } from "react-icons/md";

import RequestParams from "../../_types/request-params";
import RecipeSearchResponse from "../../_types/recipe-search-response";
import { getRecipes } from "../../_lib/get-recipes";
import RecipeList from "./recipe-list";
import RecipeDetail from "./recipe-detail";
import RecipeDetailMobile from "./recipe-detail-mobile";
import useDrawerStore from "@/app/stores/use-drawer-store";
import SearchHistory from "./search-history";
import Trends from "./trends";
import SuggestFood from "./suggest-food";

interface RecipeResultProps {
    requestParams: RequestParams;
    currentId: string;
};

export default function RecipeResult({ requestParams, currentId }: RecipeResultProps) {
    const isAboveLarge = useMediaQuery("(min-width: 1024px)", {
        initializeWithValue: false
    });

    const { close } = useDrawerStore();

    const searchParams = useSearchParams();

    const {
        data,
        isError,
        error,
        isFetching,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage
    } = useInfiniteQuery<
        RecipeSearchResponse,
        Error,
        InfiniteData<RecipeSearchResponse>,
        [string, string, RequestParams]
    >({
        queryKey: ["recipes", "search", requestParams],
        queryFn: getRecipes,
        initialPageParam: undefined,
        getNextPageParam: lastPage => lastPage._links?.next?.href || undefined,
        staleTime: 60 * 1000,
        gcTime: 5 * 60 * 1000,
        enabled: searchParams.toString() !== ""
    });

    useEffect(() => {
        if (!isAboveLarge) close();
    }, [isAboveLarge, close]);

    if (!isFetching && !isFetchingNextPage && searchParams.toString() === "") {
        return (
            <div className="h-[calc(100dvh-128px)] px-6 sm:px-12 flex flex-col gap-5 py-5">
                <div className="flex flex-col sm:flex-row gap-5">
                    <SearchHistory />
                    <Trends />
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                    <SuggestFood />
                    <SuggestFood />
                </div>
            </div>
        );
    }

    if (isFetching && !isFetchingNextPage) {
        return (
            <div className="h-[calc(100dvh-128px)] px-0 sm:px-12 flex justify-center items-center">
                <ClipLoader
                    color="black"
                    loading={true}
                    size={60}
                />
            </div>
        );
    }

    if (isError) {
        const errorMessage = error.message;

        return (
            <div className="h-[calc(100dvh-128px)] px-0 sm:px-12 flex justify-center items-center text-lg">
                <div className="flex items-center gap-3">
                    <MdErrorOutline className="text-2xl" />
                    <span>{errorMessage}</span>
                </div>
            </div>
        );
    }

    if (!data?.pages[0]?.count) {
        return (
            <div className="h-[calc(100dvh-128px)] px-0 sm:px-12 flex gap-2 justify-center items-center text-lg">
                <MdErrorOutline className="text-2xl" />
                Recipe Not Found
            </div>
        );
    }

    return (
        <div className="h-[calc(100dvh-128px)] px-0 sm:px-12 flex">
            <RecipeList
                data={data}
                isFetching={isFetching}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
                isAboveLarge={isAboveLarge}
                requestParams={requestParams}
                currentId={currentId}
            />
            {isAboveLarge ? (
                <RecipeDetail
                    requestParams={requestParams}
                    currentId={currentId}
                />
            ) : (
                <RecipeDetailMobile
                    requestParams={requestParams}
                    currentId={currentId}
                />
            )}
        </div>
    );
};