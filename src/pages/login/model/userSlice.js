import { createSlice } from "@reduxjs/toolkit";
import { domainNames } from "../../../app/constants/domainNames";
import { getRefreshStorage, saveTokens } from './../../../app/util/localstorageApi';
import { signin } from "../api/request";
import { logout } from "../../../feature/logout/api/request";

const base = {
  roles:[],
  id:0,
  login:"",
  email:"",
  password:""
}



//----state---
const initialState = {
  user:{
    ...base
  },

  token:"no",
  refresh:"no",

  status: "idle",
  statusLogout:"idle",
  auth:false,
  error: null,
};
//-------------



const userSlice = createSlice({
  name: domainNames.USER,
  initialState,
  reducers: {

    
    cleareUserData(state,action){
      state.activeUser = {}
      state.user = {}
      state.articles = {}
      state.auth = false
    },
    
    setToken(state,action){
      state.token = action.payload;
    },
    setRefresh(state,action){
      state.refresh = action.payload;
    },
    setAuth(state,action){
      state.auth = true
    },
    clearUserError(state,action){
      state.error=null
    }
  
    
  },
  extraReducers(builder) {
    builder
    
    //---авторизация-------------
    .addCase(signin.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(signin.fulfilled, (state, action) => {
      state.status = "succeeded"
      state.token = action.payload.access_token;
      state.refresh = action.payload.refresh_token;
      state.user.login = action.payload.userDto.login
      state.user.id = action.payload.userDto.id
      state.user.email = action.payload.userDto.email
      state.user.roles = action.payload.userDto.roles
      saveTokens(state.token, state.refresh)
      state.auth = true;
      state.error=null

    })
    .addCase(signin.rejected, (state, action) => {
      state.status = "failed";
      state.auth = false;
      state.error = action.error;
    })
  //----------------------------------------
      

    
    //---выход из системы-------------
    .addCase(logout.pending, (state, action) => {
        state.status = "loading";
    })
    .addCase(logout.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user ={...base}
        state.token="no"
        state.refresh=""
        state.auth=false
    })
    .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
    })
            
   
 


  },
});


export function getUser(state) {
  return state[domainNames.USER].user;
}

export function isAuth(state) {
  return state[domainNames.USER].auth;
}
export function getUserStatus(state){
  return state[domainNames.USER].status;
}
export function getUserStatusLogout(state){
  return state[domainNames.USER].statusLogout;
}
export function getUserError(state){
  return state[domainNames.USER].error;
}

export function getToken(state){
  return state[domainNames.USER].token;
}
export function getRefresh(state){

  const token = state[domainNames.USER].refresh;

  if(token!="no"){
    return token
  }else{
    return getRefreshStorage()
  }
}


export const {
  cleareUserData,

  setToken,
  setRefresh,
  clearUserError,
  setAuth
} = userSlice.actions;

export default userSlice.reducer;
