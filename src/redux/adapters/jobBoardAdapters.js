import { API_ROOT, HEADERS } from '../../backendRout';
import actions from "../actions/jobBoardActions";

export const initialFetch = () => dispatch => {
    const config = {
        method: "GET",
        headers: HEADERS
    }
    return fetch(`${API_ROOT}/job_boards`, config)
        .then(rsp => rsp.json())
        .then(data => {
            dispatch(actions.initialFetch(data))
        })
}