import PaginationDynamicBanner from "../components/layouts/Banners/PaginationDynamicBanner";
import Products from "../components/layouts/Products/Products";
import useScrollToTop from "../utils-hooks-ts-React/hooks/useScrollToTop";

export default function Home() {
    useScrollToTop();
    return (
        <div>
            <PaginationDynamicBanner />
            <div className="">
                <Products />
            </div>
        </div>
    );
}
