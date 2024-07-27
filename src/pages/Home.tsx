import PaginationDynamicBanner from "../components/layouts/Banners/PaginationDynamicBanner";
import Category from "../components/layouts/Category/Category";
import Products from "../components/layouts/Products/Products";
import useScrollToTop from "../utils-hooks-ts-React/hooks/useScrollToTop";

export default function Home() {
    useScrollToTop();
    return (
        <div>
            <PaginationDynamicBanner />
            <div>
                <Category />
            </div>
            <div className="">
                <Products />
            </div>
            <div></div>
        </div>
    );
}
