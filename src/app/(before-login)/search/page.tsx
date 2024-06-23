import SearchFilter from "./_components/search-filter/search-filter";
import SearchHeader from "./_components/search-header/search-header";
import SearchParams from "./_types/search-params";
import RecipeResult from "./_components/recipe-result/recipe-result";

interface SearchPageProps {
    searchParams: SearchParams;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
    const { currentId, ...requestParams } = searchParams;

    return (
        <div className="pt-16 h-dvh">
            <SearchHeader />
            <SearchFilter />
            <RecipeResult
                requestParams={requestParams}
                currentId={currentId as string}
            />
        </div>
    );
};