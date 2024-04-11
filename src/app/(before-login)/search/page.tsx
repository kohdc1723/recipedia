import SearchFilter from "./_components/search-filter";
import SearchHeader from "./_components/search-header";
import SearchResult from "./_components/search-result";

interface SearchPageProps {
    searchParams: {
        q?: string | undefined;
        diet?: string | undefined;
        health?: string | undefined;
        cuisine?: string[] | undefined;
        meal?: string[] | undefined;
        dish?: string[] | undefined;
    };
};

export default function SearchPage({
    searchParams
}: SearchPageProps) {
    const { q, diet, health, cuisine, meal, dish } = searchParams;

    return (
        <div className="pt-16">
            <SearchHeader />
            <SearchFilter searchParams={searchParams} />
            <SearchResult />
        </div>
    );
};