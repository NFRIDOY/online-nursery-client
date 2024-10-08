import PaginationDynamicBanner from "../components/layouts/Banners/PaginationDynamicBanner";
import Category from "../components/layouts/Category/Category";
import Footer from "../components/layouts/Footer/Footer";
import ProductOffers from "../components/layouts/Products/ProductOffers";
import Products from "../components/layouts/Products/Products";
import useScrollToTop from "../utils-hooks-ts-React/hooks/useScrollToTop";

export default function Home() {
    useScrollToTop();
    return (
        <div className="">
            <PaginationDynamicBanner />
            <div>
                <Category />
            </div>
            <div className="mb-5">
                <Products />
            </div>
            <div>
                <ProductOffers />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
