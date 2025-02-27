import { createSlice } from "@reduxjs/toolkit";
import { domainNames } from "../../../app/constants/domainNames";
import { complaintArticle, deleteComplaint } from "../api/request";


//----state---
const initialState = {
  page:{
    items:[],
    page:0,
    maxPage:0
  },

  status: "idle",

  error: null,
};
//-------------


const complaintSlice = createSlice({
  name: domainNames.COMPLAINT,
  initialState,
  reducers: {

    
    
  },
  extraReducers(builder) {
    builder
      //---запрос статей-------------
      .addCase(complaintArticle.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(complaintArticle.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.page = action.payload
      })
      .addCase(complaintArticle.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
    //----------------------------------------
          //---удаление статей-------------
          .addCase(deleteComplaint.pending, (state, action) => {
            state.status = "loading";
          })
          .addCase(deleteComplaint.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.page.items =  state.page.items.filter(item=>item.id!=action.payload)
          })
          .addCase(deleteComplaint.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
          })
        //----------------------------------------

       
  },
});


export function getComplaints(state) {
  return state[domainNames.COMPLAINT].page.items;
}

export function getComplaintPage(state){
    return state[domainNames.COMPLAINT].page.page;
}
export function getComplaintMaxPage(state){
    return state[domainNames.COMPLAINT].page.maxPage;
}





  export const { manageArticleFindStatus } = complaintSlice.actions;


export default complaintSlice.reducer;