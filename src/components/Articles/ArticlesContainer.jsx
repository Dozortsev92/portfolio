import React from 'react';
import {connect} from "react-redux";
import Articles from "./Articles";
import {updateArticlesAC} from "../../redux/articles-reducer";

let mapStateToProps = (state) => {
    return {
        articles: state.articlesPage.articles,
        limit: state.articlesPage.limit,
        startPage: state.articlesPage.startPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateArticles: (articles) => {
            dispatch(updateArticlesAC(articles))
        },
    };
};

let ArticlesContainer = connect(mapStateToProps, mapDispatchToProps)(Articles);

export default ArticlesContainer;