import { Outlet } from "react-router";
import Navbar from "../../../process/navbar/ui/Navbar";
import Menu from "../../../process/menu/ui/Menu";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../../../pages/login/model/userSlice";
import Login from "../../../pages/login/ui/Login";
import { useEffect } from "react";
import { fetchHubs } from "../../../pages/hubs/api/request";

function Layout() {
  const auth = useSelector(isAuth);
  const dispatch = useDispatch()
  useEffect(()=>{
    if(auth){
      dispatch(fetchHubs())
    }
  },[auth])

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
