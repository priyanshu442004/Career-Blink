import React from "react";
import NavBar from "../component/NavBar";
import { Outlet } from "react-router-dom";

const Rootlayout = () =>{
    return(
        <div>
          <NavBar />
          <Outlet/>
        </div>
    )
}
export default Rootlayout; 