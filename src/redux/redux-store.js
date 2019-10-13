import {combineReducers, createStore} from "redux";
import projectReviewReducer from "./projectReview-reducer";
import allReviewsReducer from "./allReviews-reducer";
import articlesReducer from "./articles-reducer";
import articleReducer from "./article-reducer";
import galleryReducer from "./gallery-redux";

let reducers = combineReducers({
    projects: projectReviewReducer,
    reviews: allReviewsReducer,
    articlesPage: articlesReducer,
    article: articleReducer,
    gallery: galleryReducer,
});

let store = createStore(reducers);

export default store;