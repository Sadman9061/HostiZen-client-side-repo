import { FaBook, FaEnvelope, FaHome, FaHouseUser, FaList, FaSearch, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineRateReview, MdUpcoming } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import useAdmin from "../hooks/useAdmin";


const DashBoard = () => {
    const userDashboardLinks =
        <>
            <li>
                <NavLink to={`/dashboard/home`}
                >
                   <FaHouseUser className='text-2xl text-[#8ABB6A] interactable'></FaHouseUser> User Home
                </NavLink>
            </li>

            <li>
                <NavLink to={`/dashboard/myProfile`}
                >
                    <CgProfile className='text-2xl text-[#8ABB6A] interactable'></CgProfile> My Profile
                </NavLink>
            </li>
            <li>
                <NavLink to={`/dashboard/requestedMeals`}
                >
                    <FaList className='text-2xl text-[#8ABB6A] interactable'></FaList> Requested Meals
                </NavLink>
            </li>
            <li>
                <NavLink to={`/dashboard/myReviews`}
                >
                   <MdOutlineRateReview className='text-2xl text-[#8ABB6A] interactable'></MdOutlineRateReview> My Reviews
                </NavLink>
            </li>

        </>

    const normalLinks =
        <>
            <li>
                <NavLink to="/">
                    <FaHome></FaHome>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to="/meals">
                    <FaSearch></FaSearch>
                    Meals</NavLink>
            </li>
            <li>
                <NavLink to="/upComingMeals">
                    <FaEnvelope></FaEnvelope>
                    Upcoming Meals</NavLink>
            </li>
        </>

    const adminDashboardLinks =
        <>
            <li>
                <NavLink to="/dashboard/admin/profile">
                    <FaHome></FaHome>
                    Admin Profile</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/manageUser">
                    <FaUtensils></FaUtensils>
                    Manager User</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/addMeals">
                    <FaList></FaList>
                    Add Meals</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/allMeals">
                    <FaBook></FaBook>
                    All Meals</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/allreview">
                    <FaUsers></FaUsers>
                    All Reviews</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/serveMeals">
                    <FaUsers></FaUsers>
                    Serve Meals</NavLink>
            </li>
            <li>
                <NavLink to="/dashboard/admin/upcomingMeals">
                    <FaUsers></FaUsers>
                    Upcoming Meals</NavLink>
            </li>
        </>
      const [isAdmin]=useAdmin()
    return (
        <div >
            <div className="drawer md:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col  ">
                    <div className="w-full ">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Navbar</label>
                        
{/* <<<<<<<<<<<<<   <<<<<<<<<< OUTLET SECTION >>>>>>>>>>>>>>>>>>>>    >>>>>>>>>>>>>>>>>>> */}
                        <Outlet></Outlet>
                    </div>
                    {/* Page content here */}
                    
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Close</label>
                        {/* Sidebar content here */}
                        {
                            isAdmin? adminDashboardLinks : userDashboardLinks
                        }                   
                        {/* shared nav links */}
                        <div className="divider"></div>
                        {normalLinks}
                    </ul>
                </div>
            </div>

        </div>





    );
};

export default DashBoard;