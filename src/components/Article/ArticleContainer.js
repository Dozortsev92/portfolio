import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {updateArticle} from "../../redux/article-reducer";
import Article from "./Article";
import {getOnePost} from "../api/api";
import {compose} from "redux";

class ArticleContainer extends React.Component {
    componentDidMount() {
        getOnePost(this.props.match.params.alias)
            .then(response => {
                    this.props.updateArticle(response.data);
                }
            );
    }

    render() {
        return <Article article={this.props.article}/>
    }
}

let mapStateToProps = (state) => {
    return {
        article: state.article,
    }
};

export default compose(
    connect(mapStateToProps, {updateArticle}),
    withRouter
)(ArticleContainer);