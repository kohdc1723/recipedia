import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IoFilterSharp } from "react-icons/io5";

import MultiSelect from "./multi-select";
import SingleSelect from "./single-select";
import { cuisineTypeOptions, dietOptions, dishTypeOptions, healthOptions, mealTypeOptions } from "../../_data/filter-options";

export default function MobileFilter() {
    return (
        <div className="h-16 px-6 md:px-12 py-2 w-full flex md:hidden justify-end items-center border-t shadow-lg bg-white">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 font-normal">
                        <IoFilterSharp />
                        Filters
                    </Button>
                </SheetTrigger>
                <SheetContent className="pt-12 w-[240px] flex flex-col">
                    <MultiSelect optionKey="diet" title="Diet" options={dietOptions} />
                    <MultiSelect optionKey="health" title="Health" options={healthOptions} />
                    <Separator orientation="horizontal" />
                    <SingleSelect optionKey="cuisine" title="Cuisine Type" options={cuisineTypeOptions} />
                    <SingleSelect optionKey="meal" title="Meal Type" options={mealTypeOptions} />
                    <SingleSelect optionKey="dish" title="Dish Type" options={dishTypeOptions} />
                </SheetContent>
            </Sheet>
        </div>
    );
};