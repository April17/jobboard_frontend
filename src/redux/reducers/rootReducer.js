import { combineReducers } from "redux";
import jobBoardReducer from "./jobBoardReducer"
import jobListReducer from "./jobListReducer"

export default combineReducers({
    jobBoard: jobBoardReducer,
    jobList: jobListReducer
});