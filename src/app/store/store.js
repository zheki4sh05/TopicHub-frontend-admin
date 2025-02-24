import { configureStore } from "@reduxjs/toolkit";
import { domainNames } from "../constants/domainNames";
import hubsSlice from "../../pages/hubs/model/hubsSlice"
import settingsSlice from "../../process/navbar/model/settingsSlice"
export const store =  configureStore({
    reducer:{
      [domainNames.HUBS]:hubsSlice,
      [domainNames.SETTINGS]:settingsSlice
    },
    
   
})