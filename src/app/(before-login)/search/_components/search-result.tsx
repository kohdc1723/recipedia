"use client";

import { useQuery } from "@tanstack/react-query";
import RecipeDetail from "./recipe-detail";
import RecipeList from "./recipe-list";

export default function SearchResult() {
    const {} = useQuery({
        queryKey: ["search", {}, {}],
        queryFn: async () => {
            const { data } = await axios.get();
        }
    });

    return (
        <div className="px-0 lg:px-12 flex ">
            <RecipeList />
            <RecipeDetail />
        </div>
    );
};