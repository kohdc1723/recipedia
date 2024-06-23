import Recipe from "./recipe";

type RecipeSearchResponse = {
    from: number;
    to: number;
    count: number;
    _links: {
        next?: {
            href: string;
            title: string;
        };
    };
    hits: Recipe[];
};

export default RecipeSearchResponse;