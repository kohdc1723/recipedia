"use client";

import Image from "next/image";
import Link from "next/link";
import { InfiniteData, useQueryClient } from "@tanstack/react-query";
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTrigger, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link2Icon, CheckIcon } from "@radix-ui/react-icons";
import { IoArrowBack } from "react-icons/io5";
import ClipLoader from "react-spinners/ClipLoader";

import useDrawerStore from "@/app/stores/use-drawer-store";
import RequestParams from "../../_types/request-params";
import RecipeSearchResponse from "../../_types/recipe-search-response";
import extractRecipeId from "../../_lib/extract-recipe-id";

interface RecipeDetailMobileProps {
    requestParams: RequestParams;
    currentId: string;
};

export default function RecipeDetailMobile({ requestParams, currentId }: RecipeDetailMobileProps) {
    const { isOpen, close } = useDrawerStore();

    const queryClient = useQueryClient();
    const data = queryClient.getQueryData<InfiniteData<RecipeSearchResponse>>(["recipes", "search", requestParams]);
    const recipe = data?.pages
        .flatMap(page => page.hits)
        .find(hit => extractRecipeId(hit.recipe.uri) === currentId)?.recipe;

    if (!recipe) {
        return (null);
                    // <div className="h-[calc(100dvh-128px)] flex-1 border flex justify-center items-center">
            //     <ClipLoader
            //         color="black"
            //         loading={true}
            //         size={60}
            //     />
            // </div>
    }

    return (
        <Drawer open={isOpen}>
            <DrawerContent className="h-dvh outline-none">
                <div className="h-12 py-2 px-4 flex items-center">
                    <IoArrowBack onClick={close} className="text-neutral-700 text-3xl hover:brightness-125" />
                </div>
                <ScrollArea className="">
                    <div className="h-full flex flex-col gap-5 p-5">
                        <DrawerHeader className="flex justify-start px-0">
                            <DrawerTitle className="font-bold text-3xl">
                                {recipe.label}
                            </DrawerTitle>
                            <DrawerDescription hidden />
                        </DrawerHeader>
                        <div className="flex flex-col sm:flex-row gap-5 justify-between">
                            <Image
                                src={recipe.image as string}
                                alt="recipe-image"
                                width={192}
                                height={192}
                                priority
                                className="border w-48 h-48 object-cover"
                            />
                            <div className="h-48 flex-1 flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Cuisine Type: </span>
                                    <span>{recipe.cuisineType.join("/")}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Meal Type: </span>
                                    <span>{recipe.mealType}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Dish Type: </span>
                                    <span>{recipe.dishType}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Calories: </span>
                                    <span>{Math.round(recipe.calories as number)} kcal</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Servings: </span>
                                    <span>{recipe.yield}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-bold">Total Time: </span>
                                    <span>{recipe.totalTime} minutes</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center self-end font-bold text-lime-900">
                            <span className="italic">by</span>
                            <Link
                                href={recipe.url as string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center underline italic hover:text-lime-700"
                            >
                                {recipe.source}
                            </Link>
                            <Link2Icon />
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Ingredients</h4>
                            <div className="flex flex-col">
                                {recipe.ingredientLines?.map((ing, index) => (
                                    <p key={index} className="flex items-baseline gap-1">
                                        <CheckIcon />
                                        <span className="flex-1">{ing}</span>
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Diet Labels</h4>
                            <div className="flex flex-wrap gap-1">
                                {recipe.dietLabels.length ? (recipe.dietLabels.map((diet, index) => (
                                    <span key={index} className="text-xs bg-black text-white rounded-full py-1 px-2">{diet}</span>
                                ))) : (
                                    <span className="text-sm">No Diet Labels</span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Health Labels</h4>
                            <div className="flex flex-wrap gap-1">
                                {recipe.healthLabels.length ? (recipe.healthLabels.map((health, index) => (
                                    <span key={index} className="text-xs bg-black text-white rounded-full py-1 px-2">{health}</span>
                                ))) : (
                                    <span className="text-sm">No Health Labels</span>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h4 className="font-bold text-lg">Cautions</h4>
                            <div className="flex flex-wrap gap-1">
                                {recipe.cautions.length ? (recipe.cautions.map((caution, index) => (
                                    <span key={index} className="text-xs bg-black text-white rounded-full py-1 px-2">
                                        {caution}
                                    </span>
                                ))) : (
                                    <span className="text-sm">No Cautions</span>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
};