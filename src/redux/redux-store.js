import {combineReducers, createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reviewsReducer from "./reviews-reducer";
import articlesReducer from "./articles-reducer";
import articleReducer from "./article-reducer";
import galleryReducer from "./gallery-redux";
import projectsReducer from "./projects-reducer";
import projectReducer from "./project-reducer";
import {createLogger} from "redux-logger";

let reducers = combineReducers({
    reviews: reviewsReducer,
    articlesPage: articlesReducer,
    article: articleReducer,
    gallery: galleryReducer,
    projects: projectsReducer,
    project: projectReducer,
});

const loggerMiddleware = createLogger();

let store = createStore(reducers, applyMiddleware(thunkMiddleware, loggerMiddleware));

export default store;