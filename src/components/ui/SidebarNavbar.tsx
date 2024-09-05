import { FaSearch, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";

export default function SidebarNavbar({ children }) {
    const cartItems = useSelector((state: RootState) => state.cart.products);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
    const order = useSelector((state: RootState) => state.order);
    console.log(order);
    const menu = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "active btn btn-accent md:btn-accent text-white "
                            : "btn btn-neutral text-white"
                    }>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/category"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "active btn btn-accent md:btn-accent text-white "
                            : "btn btn-neutral text-white"
                    }>
                    Category
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/products"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? "active btn btn-accent md:btn-accent text-white "
                            : "btn btn-neutral text-white"
                    }>
                    Products
                </NavLink>
            </li>
        </>
    );
    const profile = (
        <>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            {/* <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg> */}
                            <FaShoppingCart size={30} />
                            {/* <span className="badge badge-sm indicator-item">
                                8
                            </span> */}
                        </div>
                    </div>
                    <div
                        tabIndex={0}
                        className="card card-compact dropdown-content bg-base-100 z-[11] mt-3 w-52 shadow">
                        <div className="card-body">
                            <span className="text-lg font-bold">
                                <span className="mx-1">{cartItems?.length}</span>
                                Items
                            </span>
                            <span className="text-primary text-xl">Subtotal: ৳{totalAmount}</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">
                                    View Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar">
                        {/*  <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            /> 
                        </div>*/}
                        <FaUserAlt size={30} className="text-secondary" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[11] mt-3 w-52 p-2 shadow space-y-3">
                        <li>
                            <Link to={"/"} className="btn btn-secondary btn-sm">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to={"/admin/dashboard"}
                                className="btn btn-secondary btn-sm">
                                Admin Dashboard
                            </Link>
                        </li>
                        {/* <li>
                            <Link
                                to={"/"}
                                className="btn btn-error text-white btn-sm">
                                Logout
                            </Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full gradientPrimary ">
                    <div className="flex-none lg:hidden">
                        <label
                            htmlFor="my-drawer-3"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <Link to={"/"} className="mx-2 flex-1 px-2">
                        <GiTreeBranch size={50} />
                        <span className="text-black font-black text-3xl">
                            Nursy
                        </span>
                    </Link>

                    <div className="flex justify-center items-center z-50">
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal md:space-x-2">
                                {/* Navbar menu content here */}
                                {menu}
                            </ul>
                        </div>
                        <div>{profile}</div>
                    </div>
                </div>
                {/* Page content here */}
                {/* Content */}

                <div className="">{children}</div>
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-3"
                    aria-label="close sidebar"
                    className="drawer-overlay"></label>
                <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-2">
                    {/* Sidebar content here */}
                    {menu}
                </ul>
            </div>
        </div>
    );
}
