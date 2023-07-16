import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
    const navOptions = <>
        <Link><li><a>Home</a></li></Link>
        <Link><li><a>Instructor</a></li></Link>
        <Link><li><a>Classes</a></li></Link>
        <Link><li><a>Dashboard</a></li></Link>

    </>
    return (
        <div className="navbar bg-[#0e5d6b] mt-4 bg-opacity-100 sticky top-2 z-40">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <div>
                    <a className="btn btn-ghost normal-case lg:text-3xl bg-[#eede04]">World Language</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-base">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto br border-2 border-[#eede04] hover:border-double hover:border-4 hover:border-[#eede04]" />
                <div className="w-10 h-10 rounded-2xl border ml-2">
                    {/* <img src="../../assets/user.png" /> */}
                    <BiUserCircle className="font-extrabold text-4xl text-center"></BiUserCircle>
                </div>

            </div>

        </div>

    );
};

export default Navbar;

