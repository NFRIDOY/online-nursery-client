import { AiFillPlusSquare } from "react-icons/ai";
import { MdCategory, MdDashboard, MdDashboardCustomize } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useScrollToTop from "../../utils-hooks-ts-React/hooks/useScrollToTop";
import { useQuery } from "@tanstack/react-query";

const Admin = () => {
    useScrollToTop();

    // data fatcing
    const {
        isPending: isPendingProducts,
        error: errorProducts,
        data: productData,
        refetch: refetchProducts,
    } = useQuery({
        queryKey: ["products"],
        queryFn: async () =>
            await publicAxios.get(`/stats`).then((res) => {
                return res.data;
            }),
    });

    if (isPendingProducts || errorProducts) {
        // console.log(isPending)
        // console.log(isError)
        <div>Loading....</div>;
    }

    return (
        <div className=" h-[calc(100vh-80px)]">
            <div className="flex">
                <div className="bg-primary h-[calc(100vh-80px)] w-20 flex ">
                    <ul className="menu space-y-2 w-full">
                        <li>
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active btn btn-accent md:btn-accent text-white "
                                        : "btn btn-neutral text-white"
                                }>
                                <MdDashboard size={30} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/products"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active btn btn-accent md:btn-accent text-white "
                                        : "btn btn-neutral text-white"
                                }>
                                <AiFillPlusSquare size={30} />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/admin/category"
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "active btn btn-accent md:btn-accent text-white "
                                        : "btn btn-neutral text-white"
                                }>
                                <MdCategory size={30} />
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-full">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Admin;
