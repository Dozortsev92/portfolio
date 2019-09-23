import React from 'react';
import * as axios from 'axios';

class Articles extends React.Component {
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(response => this.props.updateArticles(response.data));
    }

    render() {
        return (
            <div>
                <div>Articles</div>
                <ul>{this.props.articles.map(article => <li>{article.id}</li>)}</ul>
            </div>
        )
    }
}

export default Articles;