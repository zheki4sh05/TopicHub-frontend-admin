const BACKEND_HOST = import.meta.env.VITE_APP_BACKEND_ADDRESS
const  base="http://"+BACKEND_HOST+"/api/v1/";
const apiPaths={
    token:{
        url:base.concat("auth/refresh"),
        logout:base.concat("auth/logout")
    },
    hubs:{
        url:base.concat("hubs"),
        fetch:"",
        create:"/create",
        update:"/update"
        },
 
}

export default apiPaths;