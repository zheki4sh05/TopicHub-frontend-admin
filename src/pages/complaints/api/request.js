import apiPaths from "../../../app/constants/apiPaths";
import { domainNames } from "../../../app/constants/domainNames";
import ApiRequestCreator from "../../../app/util/requestFactory";

const apiFactory = new ApiRequestCreator(domainNames.COMPLAINT, apiPaths.complaint.url);
export const complaintArticle = apiFactory.createGetRequest(apiPaths.complaint.fetch,true);
export const deleteComplaint = apiFactory.createDeleteRequest(apiPaths.complaint.del,true);