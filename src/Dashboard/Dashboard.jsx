import { useContext } from "react";
import { FaLanguage } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { Helmet } from "react-helmet-async";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)

    // const isAdmin = true;
    const [isAdmin] = useAdmin()


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navOptions = <>
        {
            isAdmin ? <>
                <Link to={'/dashboard/adminhome'}><li><a className="hover:text-teal-500"> Admin Home</a></li></Link>
                <Link to={'/dashboard/allusers'}><li><a className="hover:text-teal-500"> Manage Users</a></li></Link>
                <Link to={'/dashboard/allclasses'}><li><a className="hover:text-teal-500"> Manage Classes</a></li></Link>
            </> : <><Link to={'/dashboard/selectedClass'}><li><a className="hover:text-teal-500"> Selected classes</a></li></Link>
                <Link to={'/dashboard/enrolledClass'}><li><a className="hover:text-teal-500"> Enrolled Classes</a></li></Link></>
        }
    </>
    return (
        <div>
            <div>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
            </div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar bg-[#0B2447] text-white">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-grow">
                            <Link to={'/'} className="btn btn-ghost normal-case lg:text-3xl text-white"> <FaLanguage className="lg:text-4xl"></FaLanguage> World Language </Link>
                        </div>
                        <div className="flex-none hidden lg:block lg:flex-1">
                            <ul className="menu menu-horizontal ">
                                {/* Navbar menu content here */}
                                {navOptions}
                            </ul>
                        </div>
                        <div className="">
                            <button onClick={handleLogOut} className="btn btn-outline btn-error">Log Out</button>
                        </div>
                    </div>
                    {/* Page content here */}
                    <div>
                        <h1 className="text-4xl font-bold text-center ">welcome <span className="text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{user && user.displayName || user.email}</span></h1>
                    </div>

                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200">
                        {/* Sidebar content here */}
                        {navOptions}

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;