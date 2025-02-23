import { Outlet } from "react-router";
import Navbar from "../../../process/navbar/ui/Navbar";
import Menu from "../../../process/menu/ui/Menu";

function Layout() {
    return ( 
    <div>
        <Navbar/>
        <Menu/>
        <div>
            <Outlet/>
        </div>

    </div> 
    
);
}

export default Layout;