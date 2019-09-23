import React from 'react';

let Articles = (props) => {
    return (
        <div>
            <div>Articles</div>
            <ul>{props.articles.map(article => <li>{article.name}</li>)}</ul>
        </div>
    );
};

export default Articles;