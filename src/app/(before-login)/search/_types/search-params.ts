type SearchParams = {
    currentId?: string | undefined;
    q?: string | undefined;
    diet?: string | undefined;
    health?: string | undefined;
    cuisine?: string[] | undefined;
    meal?: string[] | undefined;
    dish?: string[] | undefined;
};

export default SearchParams;