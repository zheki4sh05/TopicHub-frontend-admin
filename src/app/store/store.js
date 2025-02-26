import { configureStore } from "@reduxjs/toolkit";
import { domainNames } from "../constants/domainNames";
import hubsSlice from "../../pages/hubs/model/hubsSlice"
import settingsSlice from "../../process/navbar/model/settingsSlice"
import articleSlice from "../../pages/articles/model/articleSlice"
import userSlice from "../../pages/login/model/userSlice"
export const store =  configureStore({
    reducer:{
      [domainNames.HUBS]:hubsSlice,
      [domainNames.SETTINGS]:settingsSlice,
      [domainNames.ARTICLES]:articleSlice,
      [domainNames.USER]:userSlice
    },
    
   
})