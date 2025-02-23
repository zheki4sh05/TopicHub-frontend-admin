import { baseApi } from "../../../app/util/api";

export const hubApi = baseApi.injectEndpoints({
    endpoints:(create)=>({
        getHubs:create.query({
            query:()=>"/hubs"
        })
    }),
    overrideExisting: true
})

export const {useGetHubsQuery} = hubApi