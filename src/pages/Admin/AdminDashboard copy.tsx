import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { RiPlantLine } from "react-icons/ri";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

// import PaginationDynamicBanner from "./../../components/layouts/Banners/PaginationDynamicBanner";
const AdminDashboard = () => {
    const publicAxios = useAxios();

    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: statsData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["stats"],
        queryFn: async () =>
            await publicAxios.get(`/stats`).then((res) => {
                return res.data;
            }),
    });
    // const { totalProducts, totalCategory, totalOrders } = statsData.data;
    // console.log(statsData);
    if (isPendingProducts || errorProducts) {
        // console.log(isPending)
        // console.log(isError)
        <div>Loading....</div>;
    }

    const data = [
        {
            name: "Products",
            uv: 4000,
            pv: statsData?.data?.totalProducts, // data
            amt: 2400,
        },
        {
            name: "Category",
            uv: 3000,
            pv: statsData?.data?.totalCategory,
            amt: 2210,
        },
        {
            name: "Orders",
            uv: 2000,
            pv: statsData?.data?.totalOrders,
            amt: 2290,
        },
        // {
        //     name: "Page D",
        //     uv: 2780,
        //     pv: 3908,
        //     amt: 2000,
        // },
        // {
        //     name: "Page E",
        //     uv: 1890,
        //     pv: 4800,
        //     amt: 2181,
        // },
        // {
        //     name: "Page F",
        //     uv: 2390,
        //     pv: 3800,
        //     amt: 2500,
        // },
        // {
        //     name: "Page G",
        //     uv: 3490,
        //     pv: 4300,
        //     amt: 2100,
        // },
    ];

    const getIntroOfPage = (label) => {
        if (label === "Products") {
            return "Products is about men's clothing";
        }
        if (label === "Category") {
            return "Category is about women's dress";
        }
        if (label === "Orders") {
            return "Orders is about women's bag";
        }
        if (label === "Page D") {
            return "Page D is about household goods";
        }
        if (label === "Page E") {
            return "Page E is about food";
        }
        if (label === "Page F") {
            return "Page F is about baby food";
        }
        return "";
    };

    // const CustomTooltip = ({ active, payload, label }) => {
    //     if (active && payload && payload.length) {
    //         return (
    //             <div className="custom-tooltip">
    //                 <p className="label">{`${label} : ${payload[0].value}`}</p>
    //                 <p className="intro">{getIntroOfPage(label)}</p>
    //                 {/* <p className="desc">
    //                     Anything you want can be displayed here.
    //                 </p> */}
    //             </div>
    //         );
    //     }

    //     return null;
    // };
    return (
        <div className="h-full w-full bg-slate-100 ">
            <div className="h-1/2">
                {/* <PaginationDynamicBanner /> */}
                <div className="flex justify-center items-start mt-2 ">
                    <div className="stats stats-vertical md:stats-horizontal shadow border-2 border-primary lg:w-[50%]">
                        <div className="stat">
                            <div className="stat-figure text-info">
                                <RiPlantLine size={30} />
                            </div>
                            <div className="stat-title text-xs md:text-lg lg:text-2xl font-bold ">
                                Total Products
                            </div>
                            <div className="stat-value text-info">
                                {statsData?.data?.totalProducts}
                            </div>
                            {/* <div className="stat-desc">
                                21% more than last month
                            </div> */}
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-info">
                                <BiSolidCategoryAlt size={30} />
                            </div>
                            <div className="stat-title text-xs md:text-lg lg:text-2xl font-bold ">
                                Category
                            </div>
                            <div className="stat-value text-info">
                                {statsData?.data?.totalCategory}
                            </div>
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
                            <div className="stat-value text-primary">
                                {statsData?.data?.totalOrders}
                            </div>
                            <div className="stat-title text-xs md:text-lg lg:text-2xl font-bold ">
                                Orders
                            </div>
                            {/* <div className="stat-desc text-info">
                                31 tasks remaining
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-1/2">
                {/* <div style={{ width: "100%", height: 300 }}>
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={data}
                                // fill={{pr}}
                                label
                                className="bg-primary"
                            />
                        </PieChart>
                    </ResponsiveContainer>
                </div> */}
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 0,
                            right: 30,
                            left: 20,
                            bottom: 20,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        {/* <Tooltip content={<CustomTooltip />} /> */}
                        <Legend />
                        <Bar dataKey="pv" barSize={30} fill="#32CD32" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AdminDashboard;
