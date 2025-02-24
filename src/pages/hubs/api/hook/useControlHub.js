import { useDispatch, useSelector } from "react-redux"
import { getHubsError, getHubsList, getHubsState } from "../../model/hubsSlice"
import statusTypes from "../../../../app/util/statusTypes"

const useControlHub=()=>{
    const dispatch = useDispatch()
    const state = useSelector(getHubsState)
    const hubs = useSelector(getHubsList)
    const error = useSelector(getHubsError)

    const isLoading = state==statusTypes.loading
    const loaded = state==statusTypes.succeeded

    return {dispatch, isLoading, hubs,error,loaded}
}
export default useControlHub;