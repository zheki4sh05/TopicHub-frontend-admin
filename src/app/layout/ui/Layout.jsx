import { Outlet } from "react-router";
import Navbar from "../../../process/navbar/ui/Navbar";
import Menu from "../../../process/menu/ui/Menu";
import { useSelector } from "react-redux";
import { isAuth } from "../../../pages/login/model/userSlice";
import Login from "../../../pages/login/ui/Login";

function Layout() {
  const auth = useSelector(isAuth);

  return (
    <div>
      {!auth ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <Menu />
          <div>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}

export default Layout;
