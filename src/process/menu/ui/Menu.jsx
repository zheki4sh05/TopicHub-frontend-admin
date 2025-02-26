import { Link } from "react-router";
import { PathConstants } from "../../../app/constants/pathConstants";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function Menu() {
    const { t } = useTranslation();

    return ( 
    <div style={{position:"absolute", top:"100px", left:"20px"}}>
         <ul className="" aria-labelledby="dropdownMenuButton">
      <li><Link  to={{ pathname: PathConstants.HOME }}>Главная</Link></li>
      <li><Link  to={{ pathname: PathConstants.HUBS }}>Хабы</Link></li>
      <li><Link  to={{ pathname: PathConstants.ARTICLES }}>Статьи</Link></li>
      <li><Link to={{ pathname: PathConstants.AUTHORS }}>Авторы</Link></li>
      <li><Link  to={{ pathname: PathConstants.COMPLAINTS }}>Жалобы</Link></li>
    </ul>
    </div>
   


    
);
}

export default Menu;