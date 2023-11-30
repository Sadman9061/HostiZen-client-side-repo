import {
  createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Meals from "../pages/Meals/Meals/Meals";
import Meal from "../pages/Meals/Meal/Meal";
import Error from "../pages/Error/Error";
import UpComing from "../pages/UpComing/UpComing";
import DashBoard from "../Layout/DashBoard";
import PrivateRoute from "../privateRoute/PrivateRoute";
import UserDashboard from "../pages/UserDashboard/UserDashboard";
import MyProfile from "../pages/MyProfile/MyProfile";
import RequestedMeals from "../pages/RequestedMeals/RequestedMeals";
import MyReviews from "../pages/MyReviews/MyReviews";
import Payment from "../pages/Payment/Payment";
import AdminProfile from "../pages/Admin/AdminProfile/AdminProfile";
import ManageUser from "../pages/Admin/ManageUser/ManageUser";

import AllMeals from "../pages/Admin/AllMeals/AllMeals";
import AllReviews from "../pages/Admin/AllReviews/AllReviews";
import ServeMeals from "../pages/Admin/ServeMeals/ServeMeals";
import UpcomingMeals from "../pages/Admin/UpcomingMeals/UpcomingMeals";
import AddMeals from "../pages/Admin/AddMeals/AddMeals";
import UpdateReviews from "../pages/UpdateReviews/UpdateReviews";
import AdminRoute from "../adminRoute/AdminRoute";
import UpdateMeal from "../pages/Admin/UpdateMeal/UpdateMeal";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/meals',
        element: <Meals></Meals>
      },
      {
        path: '/meals/:id',
        element: <Meal></Meal>,
        loader: ({ params }) => fetch(`https://hostizen-server-side.vercel.app/singleMeals/${params.id}`)
      },
      {
        path: "/upComingMeals",
        element: <UpComing></UpComing>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/dashboard/home',
        element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
      },
      {
        path: '/dashboard/myProfile',
        element: <PrivateRoute><MyProfile></MyProfile> </PrivateRoute>
      },
      {
        path: '/dashboard/requestedMeals',
        element: <PrivateRoute><RequestedMeals></RequestedMeals> </PrivateRoute>
      },
      {
        path: '/dashboard/myReviews',
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
      {
        path: '/dashboard/myReviews/:id',
        element: <PrivateRoute><UpdateReviews></UpdateReviews> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://hostizen-server-side.vercel.app/singleComment/${params.id}`)
      },
      {
        path: '/dashboard/:payment',
        element: <PrivateRoute><Payment></Payment></PrivateRoute>
      },
      // Admin routes
      {
        path: '/dashboard/admin/profile',
        element: <AdminRoute> <AdminProfile></AdminProfile></AdminRoute>
      },
      {
        path: '/dashboard/admin/manageUser',
        element: <AdminRoute> <ManageUser></ManageUser> </AdminRoute>
      },
      {
        path: '/dashboard/admin/addMeals',
        element: <AdminRoute><AddMeals></AddMeals></AdminRoute>
      },
      {
        path: '/dashboard/admin/allMeals',
        element: <AdminRoute><AllMeals></AllMeals></AdminRoute>
      },
      {
        path: '/dashboard/admin/updateMeal/:id',
        element:<AdminRoute><UpdateMeal></UpdateMeal></AdminRoute>,
        loader:({params})=>fetch(`https://hostizen-server-side.vercel.app/singleMeals/${params.id}`)
      },
      {
        path: '/dashboard/admin/allReview',
        element: <AdminRoute><AllReviews></AllReviews></AdminRoute>
      },
      {
        path: '/dashboard/admin/serveMeals',
        element: <AdminRoute><ServeMeals></ServeMeals></AdminRoute>
      },
      {
        path: '/dashboard/admin/upcomingMeals',
        element: <AdminRoute><UpcomingMeals></UpcomingMeals></AdminRoute>
      },


    ]
  }
]);