import apiPaths from "../../../app/constants/apiPaths";
import { domainNames } from "../../../app/constants/domainNames";
import ApiRequestCreator from "../../../app/util/requestFactory";




const apiFactory1 = new ApiRequestCreator(domainNames.AUTHORS, apiPaths.author.url);
export const fetchAuthors = apiFactory1.createGetRequest(apiPaths.author.fetch,true);
