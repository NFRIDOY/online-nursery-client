import PaginationDynamicBanner from "../components/layouts/Banners/PaginationDynamicBanner";
import AllProducts from "../components/layouts/Products/AllProducts";
export default function Home() {
    return (
        <div>
            <PaginationDynamicBanner />
            <div className="bg-secondary">
                {" "}
                
                <AllProducts />
            </div>
        </div>
    );
}
