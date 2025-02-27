import apiPaths from "../../../app/constants/apiPaths";
import { domainNames } from "../../../app/constants/domainNames";
import ApiRequestCreator from "../../../app/util/requestFactory";



const apiFactory1 = new ApiRequestCreator(domainNames.ARTICLES, apiPaths.article.url);
export const fetchArtricles = apiFactory1.createGetRequest(apiPaths.article.fetch,true);
export const changeArtricleStatus = apiFactory1.createPostRequest(apiPaths.article.status);
export const deleteArtricle = apiFactory1.createDeleteRequest(apiPaths.article.del,true);

const apiFactory2 = new ApiRequestCreator(domainNames.ARTICLES, apiPaths.article.find);
export const findArticle = apiFactory2.createGetRequest("",true);