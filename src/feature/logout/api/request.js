import apiPaths from "../../../app/constants/apiPaths";
import { domainNames } from "../../../app/constants/domainNames";
import ApiRequestCreator from "../../../app/util/requestFactory";

const apiFactory = new ApiRequestCreator(domainNames.USER, apiPaths.token.logout);
export const logout = apiFactory.createPostRequest("");