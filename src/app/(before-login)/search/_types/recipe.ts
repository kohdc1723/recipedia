type Recipe = {
    recipe: {
        label: string,
        image: string,
        source: string,
        url: string,
        uri: string,
        yield: number,
        dietLabels: string[],
        healthLabels: string[],
        cautions: string[],
        ingredientLines: string[],
        calories: number,
        totalTime: number,
        cuisineType: string[],
        mealType: string[],
        dishType: string[],
    },
    _links: {
        self: {
            href: string,
            title: string
        }
    }
};

export default Recipe;