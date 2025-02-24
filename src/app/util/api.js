import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { domainNames } from "../constants/domainNames"


const baseUrl = "http://localhost:8081/api/v1"
export const baseApi = createApi({
    baseQuery:fetchBaseQuery({baseUrl}),
    tagTypes:[domainNames.HUBS],
    endpoints: ()=>({})
})