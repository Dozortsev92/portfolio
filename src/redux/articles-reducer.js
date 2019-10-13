const ADD_ARTICLES = 'ADD_ARTICLES';

let initialState = {
    articles: [],
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

export const updateArticles = (articles) => ({type: ADD_ARTICLES, articles});

export default articlesReducer;