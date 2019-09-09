import {combineReducers, createStore} from "redux";
import projectReviewReducer from "./projectReview-reducer";

let reducers = combineReducers({
    projects: projectReviewReducer
});

let store = createStore(reducers);

export default store;