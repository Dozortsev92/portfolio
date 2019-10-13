import React from 'react';
import {connect} from "react-redux";
import Articles from "./Articles";
import {updateArticles} from "../../redux/articles-reducer";
import * as axios from "axios";

class ArticlesContainer extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.props.updateArticles(response.data));
    }

    render() {
        return <Articles articles={this.props.articles} />
    }
}

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
            dispatch(updateArticles(articles))
        },
    };
};

 export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);