import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


const baseUrl = "http://localhost:8081/api/v1"
export const baseApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints: ()=>({})
})