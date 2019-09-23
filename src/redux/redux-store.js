import {combineReducers, createStore} from "redux";
import projectReviewReducer from "./projectReview-reducer";
import allReviewsReducer from "./allReviews-reducer";
import articlesReducer from "./articles-reducer";

let reducers = combineReducers({
    projects: projectReviewReducer,
    reviews: allReviewsReducer,
    articlesPage: articlesReducer,
});

let store = createStore(reducers);

export default store;