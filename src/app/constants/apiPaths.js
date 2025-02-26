const BACKEND_HOST = import.meta.env.VITE_APP_BACKEND_ADDRESS
const  base="http://"+BACKEND_HOST+"/api/v1";
const baseAmdin  = base+"/admin" 
const apiPaths={
    token:{
        url:base.concat("/auth/refresh"),
        logout:base.concat("auth/logout")
    },
    hubs:{
        url:base.concat("/hubs"),
        fetch:"",
        create:baseAmdin.concat("/hub/create"),
        update:baseAmdin.concat("/hub/update"),
        delete:baseAmdin.concat("/hub")
        },
    article:{
        url:baseAmdin.concat("/article"),
        fetch:"/fetch",
        status:"/status"
    },
    auth:{
        url:"http://"+BACKEND_HOST+"/api/v1".concat("/auth"),
        signin:"/signin",
        logout:"/logout"
    },
 
}

export default apiPaths;