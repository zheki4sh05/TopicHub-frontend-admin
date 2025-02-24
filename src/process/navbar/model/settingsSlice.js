import { createSlice } from "@reduxjs/toolkit";
import { domainNames } from "../../../app/constants/domainNames";


//----state---
const initialState = {
    languagesList:[{id:"1",name:"Русский",code:"ru"}, {id:"2",name:"English",code:"en"}],
  activeLanguage: "ru",
};
//-------------


const settingsSlice = createSlice({
  name: domainNames.SETTINGS,
  initialState,
  reducers: {
        setLanguage(state,action){
            state.activeLanguage = action.payload;
        }
  },
});


export function getLanguagesList(state) {
  return state[domainNames.SETTINGS].languagesList;
}
export function getActiveLanguage(state) {
    return state[domainNames.SETTINGS].activeLanguage;
}

export const {setLanguage} = settingsSlice.actions

export default settingsSlice.reducer;