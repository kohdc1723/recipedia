import SearchFilter from "./_components/search-filter";
import SearchHeader from "./_components/search-header";
import SearchResult from "./_components/search-result";
import ResultDetail from "./_components/result-detail";
import SearchParams from "./_types/search-params";

interface SearchPageProps {
    searchParams: SearchParams;
};

export default function SearchPage({ searchParams }: SearchPageProps) {
    const { currentId, ...filterParams } = searchParams;

    return (
        <div className="pt-16">
            <SearchHeader />
            <SearchFilter searchParams={searchParams} />

            <div className="px-0 lg:px-12 flex">
                <SearchResult filterParams={filterParams} />
                <ResultDetail currentId={currentId} />
            </div>
        </div>
    );
};