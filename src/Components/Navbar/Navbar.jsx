import { Link } from "react-router-dom";

import { FaLanguage } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { BiUserCircle } from "react-icons/bi";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navOptions = <>
        <Link><li><a>Home</a></li></Link>
        <Link to={'/instructors'}><li><a>Instructor</a></li></Link>
        <Link to={'/classes'}><li><a>Classes</a></li></Link>
        {
            user && <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div className="navbar bg-[#0B2447] mt-4 bg-opacity-100 sticky top-2 z-40">
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
                    <a className="btn btn-ghost normal-case lg:text-3xl text-white"> <FaLanguage className="lg:text-4xl"></FaLanguage> World Language </a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white text-base">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto br border-2 border-[#F3AA60] hover:border-double hover:border-4 hover:border-[#F3AA60]" />
                <div className="">
                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {
                                        user.photoURL ? <img src="https://lh3.googleusercontent.com/a/AAcHTtfTftC80Katdz_cCncDPdFhAhOF-HEMKlIPswohNNRU_VE=s96-c" alt="" /> : <BiUserCircle className="font-extrabold text-white text-4xl text-center"></BiUserCircle>
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <button onClick={handleLogOut}> <li><a>Logout</a></li></button>
                            </ul>
                        </div> : <Link to={'/login'}><button className="btn btn-outline btn-[#576CBC] text-white p-4 ml-2 hover:bg-[#576CBC]">Login</button></Link>
                    }
                    {/* <BiUserCircle className="font-extrabold text-white text-4xl text-center"></BiUserCircle> */}

                </div>

            </div>

        </div>

    );
};

export default Navbar;

