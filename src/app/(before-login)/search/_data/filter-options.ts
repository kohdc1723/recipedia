export type Option = {
    id: string;
    label: string;
    value: string;
};

export const dietOptions: Option[] = [
    {
        id: "balanced",
        label: "balanced",
        value: "balanced"
    },
    {
        id: "high-fiber",
        label: "high-fiber",
        value: "high-fiber"
    },
    {
        id: "high-protein",
        label: "high-protein",
        value: "high-protein"
    },
    {
        id: "low-carb",
        label: "low-carb",
        value: "low-carb"
    },
    {
        id: "low-fat",
        label: "low-fat",
        value: "low-fat"
    },
    {
        id: "low-sodium",
        label: "low-sodium",
        value: "low-sodium"
    }
];

export const healthOptions: Option[] = [
    {
        id: "alcohol-cocktail",
        label: "alcohol-cocktail",
        value: "alcohol-cocktail"
    },
    {
        id: "alcohol-free",
        label: "alcohol-free",
        value: "alcohol-free"
    },
    {
        id: "celery-free",
        label: "celery-free",
        value: "celery-free"
    },
    {
        id: "crustacean-free",
        label: "crustacean-free",
        value: "crustacean-free"
    },
    {
        id: "dairy-free",
        label: "dairy-free",
        value: "dairy-free"
    },
    {
        id: "dash",
        label: "DASH",
        value: "DASH"
    },
    {
        id: "egg-free",
        label: "egg-free",
        value: "egg-free"
    },
    {
        id: "fish-free",
        label: "fish-free",
        value: "fish-free"
    },
    {
        id: "fodmap-free",
        label: "fodmap-free",
        value: "fodmap-free"
    },
    {
        id: "gluten-free",
        label: "gluten-free",
        value: "gluten-free"
    },
    {
        id: "immuno-supportive",
        label: "immuno-supportive",
        value: "immuno-supportive"
    },
    {
        id: "keto-friendly",
        label: "keto-friendly",
        value: "keto-friendly"
    },
    {
        id: "kidney-friendly",
        label: "kidney-friendly",
        value: "kidney-friendly"
    },
    {
        id: "kosher",
        label: "kosher",
        value: "kosher"
    },
    {
        id: "low-fat-abs",
        label: "low-fat-abs",
        value: "low-fat-abs"
    },
    {
        id: "low-potassium",
        label: "low-potassium",
        value: "low-potassium"
    },
    {
        id: "low-sugar",
        label: "low-sugar",
        value: "low-sugar"
    },
    {
        id: "lupine-free",
        label: "lupine-free",
        value: "lupine-free"
    },
    {
        id: "mediterranean",
        label: "mediterranean",
        value: "mediterranean"
    },
    {
        id: "mollusk-free",
        label: "mollusk-free",
        value: "mollusk-free"
    },
    {
        id: "mustard-free",
        label: "mustard-free",
        value: "mustard-free"
    },
    {
        id: "no-oil-added",
        label: "no-oil-added",
        value: "no-oil-added"
    },
    {
        id: "paleo",
        label: "paleo",
        value: "paleo"
    },
    {
        id: "peanut-free",
        label: "peanut-free",
        value: "peanut-free"
    },
    {
        id: "pescatarian",
        label: "pescatarian",
        value: "pescatarian"
    },
    {
        id: "pork-free",
        label: "pork-free",
        value: "pork-free"
    },
    {
        id: "red-meat-free",
        label: "red-meat-free",
        value: "red-meat-free"
    },
    {
        id: "sesame-free",
        label: "sesame-free",
        value: "sesame-free"
    },
    {
        id: "shellfish-free",
        label: "shellfish-free",
        value: "shellfish-free"
    },
    {
        id: "soy-free",
        label: "soy-free",
        value: "soy-free"
    },
    {
        id: "sugar-conscious",
        label: "sugar-conscious",
        value: "sugar-conscious"
    },
    {
        id: "sulfite-free",
        label: "sulfite-free",
        value: "sulfite-free"
    },
    {
        id: "tree-nut-free",
        label: "tree-nut-free",
        value: "tree-nut-free"
    },
    {
        id: "vegan",
        label: "vegan",
        value: "vegan"
    },
    {
        id: "vegetarian",
        label: "vegetarian",
        value: "vegetarian"
    },
    {
        id: "wheat-free",
        label: "wheat-free",
        value: "wheat-free"
    },
];

export const cuisineTypeOptions: Option[] = [
    {
        id: "american",
        label: "American",
        value: "American"
    },
    {
        id: "asian",
        label: "Asian",
        value: "Asian"
    },
    {
        id: "british",
        label: "British",
        value: "British"
    },
    {
        id: "caribbean",
        label: "Caribbean",
        value: "Caribbean"
    },
    {
        id: "central-europe",
        label: "Central Europe",
        value: "Central Europe"
    },
    {
        id: "chinese",
        label: "Chinese",
        value: "Chinese"
    },
    {
        id: "eastern-europe",
        label: "Eastern Europe",
        value: "Eastern Europe"
    },
    {
        id: "french",
        label: "French",
        value: "French"
    },
    {
        id: "indian",
        label: "Indian",
        value: "Indian"
    },
    {
        id: "italian",
        label: "Italian",
        value: "Italian"
    },
    {
        id: "japanese",
        label: "Japanese",
        value: "Japanese"
    },
    {
        id: "kosher",
        label: "Kosher",
        value: "Kosher"
    },
    {
        id: "mediterranean",
        label: "Mediterranean",
        value: "Mediterranean"
    },
    {
        id: "mexican",
        label: "Mexican",
        value: "Mexican"
    },
    {
        id: "middle-eastern",
        label: "Middle Eastern",
        value: "Middle Eastern"
    },
    {
        id: "nordic",
        label: "Nordic",
        value: "Nordic"
    },
    {
        id: "south-american",
        label: "South American",
        value: "South American"
    },
    {
        id: "south-east-asian",
        label: "South East Asian",
        value: "South East Asian"
    }
];

export const mealTypeOptions: Option[] = [
    {
        id: "breakfast",
        label: "Breakfast",
        value: "Breakfast"
    },
    {
        id: "dinner",
        label: "Dinner",
        value: "Dinner"
    },
    {
        id: "lunch",
        label: "Lunch",
        value: "Lunch"
    },
    {
        id: "snack",
        label: "Snack",
        value: "Snack"
    },
    {
        id: "teatime",
        label: "Teatime",
        value: "Teatime"
    },
];

export const dishTypeOptions: Option[] = [
    {
        id: "biscuits-and-cookies",
        label: "Biscuits and cookies",
        value: "Biscuits and cookies"
    },
    {
        id: "bread",
        label: "Bread",
        value: "Bread"
    },
    {
        id: "cereals",
        label: "Cereals",
        value: "Cereals"
    },
    {
        id: "condiments-and-sauces",
        label: "Condiments and sauces",
        value: "Condiments and sauces"
    },
    {
        id: "desserts",
        label: "Desserts",
        value: "Desserts"
    },
    {
        id: "drinks",
        label: "Drinks",
        value: "Drinks"
    },
    {
        id: "main-course",
        label: "Main course",
        value: "Main course"
    },
    {
        id: "pancake",
        label: "Pancake",
        value: "Pancake"
    },
    {
        id: "preps",
        label: "Preps",
        value: "Preps"
    },
    {
        id: "preserve",
        label: "Preserve",
        value: "Preserve"
    },
    {
        id: "salad",
        label: "Salad",
        value: "Salad"
    },
    {
        id: "sandwiches",
        label: "Sandwiches",
        value: "Sandwiches"
    },
    {
        id: "side-dish",
        label: "Side dish",
        value: "Side dish"
    },
    {
        id: "soup",
        label: "Soup",
        value: "Soup"
    },
    {
        id: "starter",
        label: "Starter",
        value: "Starter"
    },
    {
        id: "sweets",
        label: "Sweets",
        value: "Sweets"
    },
];