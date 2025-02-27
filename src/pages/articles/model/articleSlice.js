import { createSlice } from "@reduxjs/toolkit";
import { changeArtricleStatus, deleteArtricle, fetchArtricles, findArticle } from "../api/request";
import { domainNames } from "../../../app/constants/domainNames";


//----state---
const initialState = {
  page:{
    items:[],
    page:0,
    maxPage:0
  },
  article:{},
  findStatus:'idle',
  status: "idle",
  changeStatus:'idle',
  error: null,
};
//-------------


const articleSlice = createSlice({
  name: domainNames.ARTICLES,
  initialState,
  reducers: {

    manageArticleFindStatus(state,action){
      state.findStatus = action.payload
  },
    
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
      //---поиск статьи-------------
      .addCase(findArticle.pending, (state, action) => {
        state.findStatus = "loading";
      })
      .addCase(findArticle.fulfilled, (state, action) => {
        state.findStatus = "succeeded";
        state.article = action.payload
       
      })
      .addCase(findArticle.rejected, (state, action) => {
        state.findStatus = "failed";
        state.error = action.error.message;
      })
    //----------------------------------------
     //---удалить статью-------------
     .addCase(deleteArtricle.pending, (state, action) => {
      state.changeStatus = "loading";
    })
    .addCase(deleteArtricle.fulfilled, (state, action) => {
      state.changeStatus = "succeeded";
      state.page.items =  state.page.items.filter(item=>item.id!=action.payload)
     
    })
    .addCase(deleteArtricle.rejected, (state, action) => {
      state.changeStatus = "failed";
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
  export function getFindArticleStatus(state) {
    return state[domainNames.ARTICLES].findStatus;
  }

  export function getArticle(state) {
    return state[domainNames.ARTICLES].article;
  }





  export const { manageArticleFindStatus } = articleSlice.actions;


export default articleSlice.reducer;