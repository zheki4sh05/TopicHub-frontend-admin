import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { isAuth } from './../../../pages/login/model/userSlice';
import { useNavigate } from "react-router";
import { logout } from "../api/request";
import { PathConstants } from "../../../app/constants/pathConstants";
import "./style.css"
function LogoutBtn() {
    const {t} = useTranslation()
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const handleClickLogout=()=>{
        dispatch(logout())
        deleteTokens()
        navigate(PathConstants.LOGIN)
    }

        return(
        
          <button className="btn btn-purple" onClick={handleClickLogout} >
         Logout
        </button>
        )
 

}

export default LogoutBtn;