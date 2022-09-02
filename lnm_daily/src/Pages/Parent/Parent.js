import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Nav Bar/NavBar";

const Parent = () => {

    return(
    <>
        <NavBar/>
        <Outlet/>
    </>
    );
}
export default Parent;