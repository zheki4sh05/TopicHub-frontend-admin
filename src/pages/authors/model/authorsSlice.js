import { createSlice } from "@reduxjs/toolkit";
import { domainNames } from "../../../app/constants/domainNames";
import { fetchAuthors } from './../api/request';


//----state---
const initialState = {
  list: [],
  page:1,
  maxPage:1,
  status: "idle",
  error: null,
};
//-------------


const authorsSlice = createSlice({
  name: domainNames.AUTHORS,
  initialState,
  reducers: {

    
  },
  extraReducers(builder) {
    builder
      //---запрос авторов-------------
      .addCase(fetchAuthors.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload.items
        state.page = action.payload.page
        state.maxPage = action.payload.maxPage
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    //----------------------------------------
        
  },
});


export function getAuthorsList(state) {
  return state[domainNames.AUTHORS].list;
}

export function getAuthorsPage(state){
    return state[domainNames.AUTHORS].page
}
export function getAuthorsMaxPage(state){
    return state[domainNames.AUTHORS].maxPage
}
export function getAuthorStatus(state){
    return state[domainNames.AUTHORS].status;
}



export default authorsSlice.reducer;