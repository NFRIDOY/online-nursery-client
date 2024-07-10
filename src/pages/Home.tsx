import PaginationDynamicBanner from "../components/layouts/Banners/PaginationDynamicBanner";
import AllProducts from "../components/layouts/Products/AllProducts";
import Container from "../components/ui/Container";
import Title from "../components/ui/Title";
export default function Home() {
    return (
        <div>
            <PaginationDynamicBanner />
            <Container>
                {" "}
                <Title>All Products</Title>
                <AllProducts />
            </Container>
        </div>
    );
}
