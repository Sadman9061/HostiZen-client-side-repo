import { NavLink, } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { RiLogoutBoxFill } from "react-icons/ri";
import { RiLogoutBoxRFill } from "react-icons/ri";

import { RiLoginBoxFill } from "react-icons/ri";

import { FaHome } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { MdUpcoming } from "react-icons/md";

import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUser } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";




const Navbar = () => {
    const [click, setClick] = useState(false);

    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }

    const onlyForPhoneUser =
        <>
            <li><NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                }
            >
                <FaHome className="text-2xl text-[#8ABB6A] "></FaHome > Home
            </NavLink>
            </li>
            <li>
                <NavLink
                    to="/meals"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                    }
                >
                    <GiMeal className="text-2xl text-[#8ABB6A] "></GiMeal  > Meals
                </NavLink>
            </li>

        </>
    const alsoOnlyForPhoneUser =
        <>
            {
                user?.email &&
                <li>
                    <NavLink
                        to="/dashboard/home"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                        }
                    >
                        <FaUser className='text-2xl text-[#8ABB6A] ' ></FaUser  > Dashboard
                    </NavLink>
                </li>
            }
            <li>
                {
                    user ? <div><RiLogoutBoxFill title="Log Out" className='text-2xl text-[#8ABB6A] interactable ' onClick={handleSignOut}></RiLogoutBoxFill> Log Out</div> :
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending " : isActive ? "text-[#FFDB74] underline " : ""
                            }
                        >
                            <RiLoginBoxFill title="Log In" className="text-2xl text-[#8ABB6A] interactable  "></RiLoginBoxFill > Log In
                        </NavLink>
                }
            </li>
            <li>
                <NavLink
                    to="/signup"
                    className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFDB74] underline " : ""
                    }
                >
                    <RiLogoutBoxRFill title="Sign Up" className='text-2xl text-[#8ABB6A] ' ></RiLogoutBoxRFill > Sign Up
                </NavLink>
            </li>
            <li>
                <label tabIndex={0} className="btn btn-ghost btn-circle ">
                    <div data-aos="fade-down"
                        data-aos-anchor-placement="center"

                        data-aos-duration="1000" className="w-8 rounded-full"  >
                        {
                            user?.email ?
                                <button className="btn btn-ghost btn-circle ml-1  interactable w-8 rounded-full">
                                    {user?.email && user?.photoURL ? <img title="Profile" className=" rounded-full  border-[#FFDB74] border-2" src={user && user.photoURL} alt="" /> :
                                        <div>{
                                            <img title="Profile" className=" border-[#FFDB74] border-2 rounded-full" src="https://web.programming-hero.com/static/media/profileImage.934e5b10.png" alt="" />
                                        }</div>}
                                </button>
                                : ''
                        }
                    </div>
                </label>
                {user?.email && <h1>{user && user.displayName}</h1>}
            </li>
        </>

    const onlyForPhoneUsers =
        <>
            <li>
                <NavLink
                    to="/upComingMeals"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                    }
                >
                    <MdUpcoming className='text-2xl text-[#8ABB6A] interactable' ></MdUpcoming> Upcomimg Meals
                </NavLink>
            </li>
            <li>
              <div>
                 
              <IoMdNotifications  className='text-2xl text-[#8ABB6A] interactable' ></IoMdNotifications > Notification
              </div>
             
            </li>
        </>


    const onlyForPCUser =
        <>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                }
            >
                <FaHome className="text-2xl text-[#8ABB6A] interactable"></FaHome > <span className="text-sm -ml-1">Home</span>
            </NavLink>

            <NavLink
                to="/meals"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                }
            >
                <GiMeal className="text-2xl text-[#8ABB6A] interactable"></GiMeal  >  <span className="text-sm -ml-3">Meals</span>
            </NavLink>
        </>
    const onlyForValidPCUser =
        <>
            <NavLink to="/upComingMeals" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""}>
                <MdUpcoming className='text-2xl text-[#8ABB6A] interactable' ></MdUpcoming> <span className="text-sm -ml-6">Upcoming Meals</span>
            </NavLink>
          
               <div className="flex flex-col justify-center">
               <IoMdNotifications  className='text-2xl text-[#8ABB6A] interactable' ></IoMdNotifications > <span className="text-sm -ml-6">Notification</span>
               </div>
        
       
        </>


    const handleClick = () => {
        setClick(!click)
        console.log(click);
    }

    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (lastScrollY < window.scrollY) {
            document.getElementById('nav').classList.add("hidden")
        }
        else {
            document.getElementById('nav').classList.remove("hidden")
        }
        lastScrollY = window.scrollY;
    })
    return (
        <div id="nav"
            className=" navbar backdrop-blur-md fixed z-10 shadow-xl px-2 lg:px-12  " >
            {/* navbar start  */}

            <div className=" navbar-start " data-aos="fade-down"
                data-aos-anchor-placement="center"

                data-aos-duration="1000"  >
                <NavLink to='/'>  <div className="flex items-center interactable">
                    <img className="w-10 rounded-full" src="https://th.bing.com/th/id/OIG.KEGJmaBjvjrv62WmYDAZ?pid=ImgGn" alt="" />

                    <h1 className="text-3xl font-black  bg-gradient-to-r from-[#8ABB6A] to-[#8ABB6A]  bg-clip-text text-transparent text-center ml-4 ">Hosti<span className="text-[#FFDB74]">Zen</span></h1>
                </div></NavLink>
            </div>
            {/* menu bar  */}
            <div className="navbar-center md:ml-12 lg:ml-20 md:space-x-12 lg:space-x-18 xl:space-x-20 hidden md:flex ">

                {
                    onlyForPCUser
                }
                {
                    onlyForValidPCUser
                }

            </div>
            <div className="navbar-end md:hidden flex  ">
                <details className="dropdown  dropdown-end">
                    <summary title="Menu" className={`m-1 btn btn-ghost btn-circle text-[#8ABB6A]`} onClick={handleClick}  > {
                        click ? <RxCross2 className="text-2xl interactable"></RxCross2> : <RxHamburgerMenu className="text-2xl interactable"></RxHamburgerMenu>
                    }</summary>
                    <ul
                        className="space-y-3 mt-3 z-[1] p-2  menu menu-sm dropdown-content bg-base-100 shadow-2xl rounded-box w-52">
                        {
                            onlyForPhoneUser
                        }
                        {
                            onlyForPhoneUsers
                        }
                        {
                            alsoOnlyForPhoneUser
                        }

                    </ul>
                </details>
            </div>
            {/* profile  */}
            <div className="navbar-end hidden md:flex  ">
                <div className=" mr-4">
                    {/* PROOOOOOOOOOFILE  */}

                    {
                        user?.email ?
                            <div className="flex gap-2">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle ">
                                        <div data-aos="fade-down"
                                            data-aos-anchor-placement="center"

                                            data-aos-duration="1000" className="w-12 rounded-full"  >
                                            <button className="btn btn-ghost btn-circle  interactable w-12 rounded-full">

                                                {user && user?.photoURL ? <img title="Profile" className=" rounded-full h-12 w-12 border-[#8ABB6A] border-2" src={`${user?.photoURL}`} alt="" /> :
                                                    <div>
                                                        {
                                                            <img title="Profile" className=" rounded-full  border-[#8ABB6A] border-2" src='https://web.programming-hero.com/static/media/profileImage.934e5b10.png' alt="" />
                                                        }
                                                    </div>}
                                            </button>
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 space-y-1 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">



                                        {user && user?.photoURL ?
                                            <div className="flex justify-center">
                                                <h1>● {user && user.displayName}</h1>
                                            </div>
                                            :
                                            'user'}

                                        <li>
                                            {
                                                user ? <div onClick={handleSignOut}><RiLogoutBoxFill title="Log Out" className='text-2xl  text-[#8ABB6A] interactable '></RiLogoutBoxFill> Log Out</div> :
                                                    <NavLink
                                                        to="/login"
                                                        className={({ isActive, isPending }) =>
                                                            isPending ? "pending " : isActive ? "text-[#FFDB74] underline " : ""
                                                        }>
                                                        <RiLoginBoxFill title="Log In" className="text-2xl text-[#8ABB6A] interactable  "></RiLoginBoxFill > Log In
                                                    </NavLink>
                                            }
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/home"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "text-[#FFDB74] underline" : ""
                                                }
                                            >
                                                <FaUser className='text-2xl text-[#8ABB6A] interactable' ></FaUser  >  Dashboard
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/signup"
                                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFDB74] underline " : ""
                                                }
                                            >
                                                <RiLogoutBoxRFill title="Sign Up" className='text-2xl text-[#8ABB6A] ' ></RiLogoutBoxRFill > Sign Up
                                            </NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                            :
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FFDB74] underline " : ""
                                }
                            >
                                <button className="form-control block w-full select-none  py-3 px-6 text-center align-middle font-sans text-xs font-bold   shadow-xl transition-all hover:shadow-2xl  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none btn bg-green-500 border-none hover:bg-green-600 text-white   normal-case">Join Us </button>
                            </NavLink>
                    }

                </div>
            </div>
        </div >
    );
};
export default Navbar;