import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getTheArticleThunk} from "../../redux/article-reducer";
import Article from "./Article";
import {compose} from "redux";

class ArticleContainer extends React.Component {
    componentDidMount() {
        this.props.getTheArticleThunk(this.props.match.params.alias);
    }

    render() {
        return <Article article={this.props.article}/>
    }
}

const mapStateToProps = state => ({
    article: state.article,
});

export default compose(
    connect(mapStateToProps, {getTheArticleThunk}),
    withRouter
)(ArticleContainer);