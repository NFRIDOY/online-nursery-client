import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { RiPlantLine } from "react-icons/ri";

// import PaginationDynamicBanner from "./../../components/layouts/Banners/PaginationDynamicBanner";
const AdminDashboard = () => {
    return (
        <div className="h-full w-full bg-slate-100">
            <div className="h-1/2">
                {/* <PaginationDynamicBanner /> */}
                <div className="flex justify-center items-start mt-2 ">
                    <div className="stats shadow border-2 border-primary w-[80%]">
                        <div className="stat">
                            <div className="stat-figure text-info">
                                <RiPlantLine size={30} />
                            </div>
                            <div className="stat-title font-bold ">Total Products</div>
                            <div className="stat-value text-info">1000</div>
                            {/* <div className="stat-desc">
                                21% more than last month
                            </div> */}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-info">
                                <BiSolidCategoryAlt size={30} />
                            </div>
                            <div className="stat-title font-bold ">Category</div>
                            <div className="stat-value text-info">2.6M</div>
                            {/* <div className="stat-desc">
                                21% more than last month
                            </div> */}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-info">
                                <div className="avatar online">
                                    {/* <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                    <FaCartShopping size={30} />
                                </div>
                            </div>
                            <div className="stat-value text-primary">86</div>
                            <div className="stat-title font-bold ">Orders</div>
                            {/* <div className="stat-desc text-info">
                                31 tasks remaining
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-1/2"></div>
        </div>
    );
};

export default AdminDashboard;
