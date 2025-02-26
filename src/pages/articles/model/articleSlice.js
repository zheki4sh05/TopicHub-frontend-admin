import { createSlice } from "@reduxjs/toolkit";
import { changeArtricleStatus, fetchArtricles } from "../api/request";
import { domainNames } from "../../../app/constants/domainNames";


//----state---
const initialState = {
  page:{
    items:[],
    page:0,
    maxPage:0
  },
  status: "idle",
  changeStatus:'idle',
  error: null,
};
//-------------


const articleSlice = createSlice({
  name: domainNames.ARTICLES,
  initialState,
  reducers: {

    
  },
  extraReducers(builder) {
    builder
      //---запрос статей-------------
      .addCase(fetchArtricles.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchArtricles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.page = action.payload
      })
      .addCase(fetchArtricles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    //----------------------------------------
       //---изменить статус статьи-------------
       .addCase(changeArtricleStatus.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(changeArtricleStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        const { id } = action.payload; 
        state.page.items = state.page.items.filter(item=>item.id!=id)
       
      })
      .addCase(changeArtricleStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    //----------------------------------------
       
  },
});


export function getFeed(state) {
  return state[domainNames.ARTICLES].page.items;
}
export function getPage(state) {
    return state[domainNames.ARTICLES].page.page;
  }

  export function getMaxPage(state) {
    return state[domainNames.ARTICLES].page.maxPage;
  }

  export function getArticleStatus(state) {
    return state[domainNames.ARTICLES].status;
  }
  export function getChangeArticleStatus(state) {
    return state[domainNames.ARTICLES].changeStatus;
  }






export default articleSlice.reducer;