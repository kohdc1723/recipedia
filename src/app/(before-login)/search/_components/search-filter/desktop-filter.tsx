import { Separator } from "@/components/ui/separator";

import MultiSelect from "./multi-select";
import SingleSelect from "./single-select";
import { cuisineTypeOptions, dietOptions, dishTypeOptions, healthOptions, mealTypeOptions } from "../../_data/filter-options";

export default function DesktopFilter() {
    return (
        <div className="h-16 px-6 lg:px-12 py-2 w-full hidden md:flex items-center gap-2 border-t shadow-lg bg-white">
            <MultiSelect optionKey="diet" title="Diet" options={dietOptions} />
            <MultiSelect optionKey="health" title="Health" options={healthOptions} />
            <Separator orientation="vertical" />
            <SingleSelect optionKey="cuisine" title="Cuisine Type" options={cuisineTypeOptions} />
            <SingleSelect optionKey="meal" title="Meal Type" options={mealTypeOptions} />
            <SingleSelect optionKey="dish" title="Dish Type" options={dishTypeOptions} />
        </div>
    );
};