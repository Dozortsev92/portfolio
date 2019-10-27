import React from 'react';
import {connect} from "react-redux";
import Articles from "./Articles";
import {getAllPostsThunk} from "../../redux/articles-reducer";

class ArticlesContainer extends React.Component {
    componentDidMount() {
        this.props.getAllPostsThunk();
    }

    render() {
        return <Articles articles={this.props.articles}/>
    }
}

const mapStateToProps = state => ({
    articles: state.articlesPage.articles,
    limit: state.articlesPage.limit,
    startPage: state.articlesPage.startPage,
});

export default connect(mapStateToProps, {getAllPostsThunk})(ArticlesContainer);