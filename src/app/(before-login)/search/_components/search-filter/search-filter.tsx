import MediaQueryWrapper from "./filter-wrapper";
import DesktopFilter from "./desktop-filter";
import MobileFilter from "./mobile-filter";

export default function SearchFilter() {
    return (
        <MediaQueryWrapper onMobile={<MobileFilter />}>
            <DesktopFilter />
        </MediaQueryWrapper>
    );
};