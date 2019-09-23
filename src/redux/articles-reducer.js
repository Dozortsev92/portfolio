const ADD_ARTICLES = 'ADD_ARTICLES';

let initialState = {
    articles: [],
    limit: 4,
    startPage: 1,
}

const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLES:
            return {
                ...state,
                articles: action.articles
            };
        default:
            return state;
    }
};

export const updateArticlesAC = (articles) => ({type: ADD_ARTICLES, articles});

export default articlesReducer;