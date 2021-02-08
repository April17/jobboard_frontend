import { API_ROOT, HEADERS } from '../../backendRout';
import actions from "../actions/jobListActions";

export const getJobList = (query) => dispatch => {
    const config = {
        method: "GET",
        headers: HEADERS
    }
    return fetch(`${API_ROOT}/job_opportunities/${query.companyName}?page=${query.page}`, config)
        .then(rsp => rsp.json())
        .then(data => dispatch(actions.getJobList({companyName: query.companyName, data})))

}