// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import './styles.css';

// import required modules
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { bannersLinks } from "../../../utils/bannersLinks";

const PaginationDynamicBanner = () => {
    return (
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
                    waitForTransition: false
                }}
                speed={1000}
                modules={[Pagination, EffectFade, Autoplay]}
                className="mySwiper h-[calc(100vh-80px)] ">
                {bannersLinks.map((banner) => (
                    <>
                        <SwiperSlide>
                            <img
                                src={banner}
                                alt={banner}
                                className="object-contain w-full"
                            />
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
        </div>
    );
};

export default PaginationDynamicBanner;
