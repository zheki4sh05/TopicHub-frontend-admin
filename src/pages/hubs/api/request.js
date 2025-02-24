
import apiPaths from "../../../app/constants/apiPaths";
import { domainNames } from "../../../app/constants/domainNames";
import ApiRequestCreator from "../../../app/util/requestFactory";


const apiFactory1 = new ApiRequestCreator(domainNames.HUBS+"/fetch", apiPaths.hubs.url);
export const fetchHubs = apiFactory1.createGetRequest("",false);

const apiFactory2 = new ApiRequestCreator(domainNames.HUBS+"/create", apiPaths.hubs.url);
export const createHubs = apiFactory2.createPostRequest("");

const apiFactory4 = new ApiRequestCreator(domainNames.HUBS+"/del", apiPaths.hubs.url);
export const doDeleteHubs = apiFactory4.createDeleteRequest("",true);

const apiFactory5 = new ApiRequestCreator(domainNames.HUBS+"/update", apiPaths.hubs.url);
export const doUpdateHubs = apiFactory5.createPatchRequest("");