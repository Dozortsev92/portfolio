import React from 'react';
import * as axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {updateArticle} from "../../redux/article-reducer";
import Article from "./Article";

class ArticleContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/` + this.props.match.params.alias)
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

let ArticleContainerWithPath = withRouter(ArticleContainer);

export default connect(mapStateToProps, {updateArticle})(ArticleContainerWithPath);