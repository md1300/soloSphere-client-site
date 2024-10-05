import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import LogIn from "../pages/Authentication/LogIn";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AdJob from "../pages/AdJob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";
import AllJobs from "../pages/AllJobs";




const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'/logIn',
                element:<LogIn/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/jobs/:id',
                element:<PrivateRoute><JobDetails/></PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path:'/add-job',
                element:<PrivateRoute><AdJob/></PrivateRoute>
            },
            {
                path:'/my-posted-jobs',
                element:<PrivateRoute><MyPostedJobs/></PrivateRoute>,
            },
            {
                path:'update/:id',
                element:<PrivateRoute><UpdateJob/></PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path:'/my-bids',
                element:<PrivateRoute><MyBids/></PrivateRoute>
            },
            {
                path:'//bid-requests',
                element:<PrivateRoute><BidRequests/></PrivateRoute>
            },
            {
                path:'jobs',
                element:<AllJobs/>
            }
        ]
    },

])
export default router