const extractRecipeId = (recipeUri: string) => {
    return recipeUri.split("#recipe_")[1];
};

export default extractRecipeId;