// @flow strict

import Footer from "../share/Footer/Footer";
import Navbar from "../share/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
}

export default Layout;