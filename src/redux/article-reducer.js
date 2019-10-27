import {getOnePost} from "../components/api/api";

const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

let initialState = {};

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE:
            return {
                ...action.article,
            };
        default:
            return state;
    }
};

export const updateArticle = article => ({type: UPDATE_ARTICLE, article});

export const getTheArticleThunk = alias => dispatch => {
    getOnePost(alias)
        .then(response => dispatch(updateArticle(response.data)));
};

export default articleReducer;