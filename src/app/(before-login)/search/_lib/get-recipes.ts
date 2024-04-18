import RequestParams from "../_types/filter-params";

const createRequestUrl = (requestParams: RequestParams) => {
    const baseUrl = "https://api.edamam.com/api/recipes/v2";
    const type = "type=public";
    const credentials = `app_id=${process.env.EDAMAM_APP_ID}&app_key=${process.env.EDAMAM_APP_KEY}`;
    const fields = "field=label&field=image&field=source&field=url&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=calories&field=totalTime&field=cuisineType&field=mealType&field=dishType";

    return `${baseUrl}&${type}&${fields}&${credentials}`;
};

export default async function getRecipes() {
    const requestUrl = createRequestUrl();
    const response = await fetch(`http`);
};