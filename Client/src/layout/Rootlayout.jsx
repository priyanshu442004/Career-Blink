import React from "react";
import NavBar from "../component/NavBar";
import Footer from "../component/footer";
import { Outlet,useLocation } from "react-router-dom";

const Rootlayout = () =>{
 
    const location = useLocation();
    return(
        <div>
          <NavBar />
          <Outlet/>
           <Footer />
        </div>
    )
}
export default Rootlayout; 