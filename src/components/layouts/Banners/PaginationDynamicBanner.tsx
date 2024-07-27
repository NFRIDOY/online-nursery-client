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
import { Link } from "react-router-dom";

const PaginationDynamicBanner = () => {
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
                    modules={[Pagination, EffectFade, Autoplay]}
                    className="mySwiper md:h-[calc(100vh-80px)] -z-50">
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
            <div className="absolute text-2xl lg:text-7xl top-10 lg:top-[30%] left-10  lg:left-20 z-10 w-1/2 font-bold md:font-normal">
                <h1>
                    Let's Make{" "}
                    <span className=" text-white font-bold">Beautiful</span>{" "}
                    Plants A Part Of <br />
                    <span>Your Life</span>
                </h1>
                {/* <div className="z-50">
                    <Link to={"/AllProducts"} className="btn btn-accent ">Shop Now</Link>
                </div> */}
            </div>
        </div>
    );
};

export default PaginationDynamicBanner;
