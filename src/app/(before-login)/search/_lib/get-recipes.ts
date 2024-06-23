import { QueryFunction, QueryFunctionContext } from "@tanstack/react-query";
import RequestParams from "../_types/request-params";
import RecipeSearchResponse from "../_types/recipe-search-response";

const createRequestString = (requestParams: RequestParams) => {
    const { q, diet, health, cuisine, meal, dish } = requestParams;

    const params = [
        q ? `q=${q}` : "",
        diet ? diet.split(",").map(d => `diet=${d}`).join("&") : "",
        health ? health.split(",").map(h => `health=${h}`).join("&") : "",
        cuisine ? `cuisineType=${cuisine}` : "",
        meal ? `mealType=${meal}` : "",
        dish ? `dishType=${dish}` : "",
    ].filter(param => param !== "");

    return params.join("&");
};

const createRequestUrl = (requestParams: RequestParams) => {
    const baseUrl = "https://api.edamam.com/api/recipes/v2";
    const type = "type=public";
    const requestString = createRequestString(requestParams);
    const credentials = `app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`;
    const fields = "field=uri&field=label&field=image&field=source&field=url&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType";

    return `${baseUrl}?${type}&${requestString}&${fields}&${credentials}`;
};

export const getRecipes: QueryFunction<RecipeSearchResponse, [string, string, RequestParams], unknown> = async ({ queryKey, pageParam }: QueryFunctionContext<[string, string, RequestParams]>) => {
    const [_1, _2, requestParams] = queryKey;

    // const requestUrl = createRequestUrl(requestParams);

    const path = pageParam ? pageParam : createRequestUrl(requestParams);

    try {
        const response = await fetch(path as string, {
            next: {
                tags: ["recipes", "search", JSON.stringify(requestParams)]
            }
        });

        const result = await response.json();

        return result;
    } catch (error) {
        throw new Error("Failed to fetch data");
    }
};