import ResultList from "./result-list";
import ResultSummary from "./result-summary";
import FilterParams from "../_types/filter-params";

interface SearchResultProps {
    filterParams: FilterParams
};

export default function SearchResult({ filterParams }: SearchResultProps) {
    return (
        <div className="flex-1 flex flex-col">
            <ResultSummary />
            <ResultList />
        </div>
    );
};