const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

let initialState = {
};

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ARTICLE:
            return {
                ...state,
                ...action.article,
            };
        default:
            return state;
    }
}

export const updateArticle = (article) => ({type: UPDATE_ARTICLE, article});

export default articleReducer;