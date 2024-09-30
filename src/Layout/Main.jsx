import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            {/* Layout */}
            <div className="min-h-[calc(100vh-305px)]">
            <Outlet/>
            </div>
            
            {/* footer*/}
            <Footer/>
        </div>
    );
};

export default Main;