import { domainNames } from "../../../app/constants/domainNames";
import { baseApi } from "../../../app/util/api";

const baseUri="/hubs";

export const hubApi = baseApi.injectEndpoints({
    endpoints:(create)=>({
        getHubs:create.query({
            query:()=>"/hubs",
            providesTags:[domainNames.HUBS]
        }),
        deleteHub: create.mutation({
            query:(hubId)=>({method:"delete", uri:baseUri+`?id=${hubId}`}),
            invalidatesTags: [domainNames.HUBS]
        })
    }),
    overrideExisting: true
})

export const {
    useGetHubsQuery,
    useDeleteHubMutation
} = hubApi

import DomainNames from "../../../app/store/DomainNames";
import api from "../../../app/util/apiPath";
import ApiRequestCreator from "../../../app/util/requestFactory";


const apiFactory2 = new ApiRequestCreator(DomainNames.hubs+"/create", api.hubs.url);
export const createHubs = apiFactory2.createPostRequest("");

const apiFactory4 = new ApiRequestCreator(DomainNames.hubs+"/del", api.hubs.url);
export const doDeleteHubs = apiFactory4.createDeleteRequest("",true);

const apiFactory5 = new ApiRequestCreator(DomainNames.hubs+"/update", api.hubs.url);
export const doUpdateHubs = apiFactory5.createPutRequest("");