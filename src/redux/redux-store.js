import {combineReducers, createStore} from "redux";
import projectReviewReducer from "./projectReview-reducer";
import allReviewsReducer from "./allReviews-reducer";

let reducers = combineReducers({
    projects: projectReviewReducer,
    reviews: allReviewsReducer,
});

let store = createStore(reducers);

export default store;