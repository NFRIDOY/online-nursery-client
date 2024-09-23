// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import './styles.css';

// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const ProductOffers = () => {
    const publicAxios = useAxios();

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () =>
            await publicAxios.get(`/products`).then((res) => {
                return res.data;
            }),
    });

    // console.log(productData?.data);
    return (
        <div className="relative -z-50">
            <div>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    effect={"fade"}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        waitForTransition: false,
                    }}
                    speed={1000}
                    modules={[EffectFade, Autoplay]}
                    className="mySwiper z-40">
                    {
                    productData?.data?.slice(0, 5)?.map((product) => (
                        <>
                            <SwiperSlide className="bg-secondary">
                                <div className=" bg-gradient-to-r from-green-400 via-green-500 to-green-600 z-50">
                                    <div className="h-[600px] flex flex-col md:flex-row justify-between items-center mx-2 mb-10 md:mb-0 mt-2 md:mx-40">
                                        <div>
                                            {/* <ProductCard product={product} /> */}
                                            <img src={product?.image} alt="" className="w-80" />
                                        </div>
                                        <div>
                                            <h1 className="text-white text-6xl font-semibold">Get fresh plants</h1>
                                            {/* <button className="btn btn-secondary z-50">Buy Now</button> */}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </div>
            
        </div>
    );
};

export default ProductOffers;
