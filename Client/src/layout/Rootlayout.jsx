import React from "react";
import NavBar from "../component/NavBar";
import { Outlet,useLocation } from "react-router-dom";
import Footer from "../component/Footer";

const Rootlayout = () =>{
 
    const location = useLocation();
  const hideHeaderFooter = ["/login", "/signup"].includes((location.pathname).toLowerCase()); 
    return(
        <div className="flex flex-col min-h-screen">
          {!hideHeaderFooter && <NavBar />}
          <main className="flex-grow">  
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
        </div>
    )
}
export default Rootlayout; 