const CLIENT_HOST = import.meta.env.VITE_APP_CLIENT_ADDRESS 
export const PathConstants = {
    HOME: "/admin",
    LOGIN:"/admin/login",
    HUBS:"/admin/hubs",
    ARTICLES:"/admin/articles",
    ARTICLE:"/admin/article",
    AUTHORS:"/admin/authors",
    COMPLAINTS:"/admin/complaints",
    COMPLAINT:"/admin/complaint",
    CLIENT:"http://"+CLIENT_HOST
}