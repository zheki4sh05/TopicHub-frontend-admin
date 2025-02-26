import apiPaths from "../../../app/constants/apiPaths";
import { domainNames } from "../../../app/constants/domainNames";
import ApiRequestCreator from "../../../app/util/requestFactory";

const apiFactory = new ApiRequestCreator(domainNames.USER, apiPaths.auth.url);
export const signin = apiFactory.createPostRequest(apiPaths.auth.signin);