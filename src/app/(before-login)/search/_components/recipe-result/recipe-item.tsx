"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Link2Icon } from "@radix-ui/react-icons";

import useDrawerStore from "@/app/stores/use-drawer-store";
import Recipe from "../../_types/recipe";
import extractRecipeId from "../../_lib/extract-recipe-id";

interface RecipeItemProps {
    recipe: Recipe
};

export default function RecipeItem({ recipe }: RecipeItemProps) {
    const { open } = useDrawerStore();

    const hit = recipe;
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleClickRecipe = (recipeUri: string) => {
        const recipeId = extractRecipeId(recipeUri);

        const _searchParams = new URLSearchParams(searchParams);
        _searchParams.set("currentId", recipeId);
        router.push(`/search?${_searchParams.toString().replaceAll("+", "%20")}`);

        open();
    };

    const handleClickLink = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.stopPropagation();
    };

    return (
        <div
            onClick={() => handleClickRecipe(hit.recipe.uri)}
            className="flex gap-3 border p-3 hover:bg-neutral-50"
        >
            <Image
                src={hit.recipe.image}
                alt={hit.recipe.label}
                width={144}
                height={144}
                priority
                className="border w-36 h-36 object-cover"
            />
            <div className="w-full flex flex-col justify-between">
                <div className="flex flex-col items-start">
                    <p className="text-lg font-semibold">{hit.recipe.label}</p>
                    <div className="text-wrap">
                        <span>{hit.recipe.cuisineType.join("/")}</span>
                        <span> · </span>
                        <span>{hit.recipe.mealType}</span>
                        <span> · </span>
                        <span>{hit.recipe.dishType}</span>
                    </div>
                    <div className="text-wrap">
                        <span>{hit.recipe.ingredientLines.length} ingredients</span>
                        <span> · </span>
                        <span>{hit.recipe.totalTime} minutes</span>
                    </div>
                    <div className="text-wrap">
                        <span>{Math.round(hit.recipe.calories)} kcal</span>
                        <span> · </span>
                        <span>{hit.recipe.yield} servings</span>
                    </div>
                </div>
                <div className="flex gap-1 items-center text-wrap self-end z-10">
                    <Link
                        href={hit.recipe.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleClickLink}
                        className="flex items-center underline italic hover:text-neutral-500"
                    >
                        {hit.recipe.source}
                    </Link>
                    <Link2Icon />
                </div>
            </div>
        </div>
    );
}