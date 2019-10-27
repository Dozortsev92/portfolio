import React from 'react';
import {NavLink} from "react-router-dom";

let Articles = props => {
    return (
        <div>
            <div>Articles</div>
            <ul>
                {props.articles && props.articles.map(article =>
                    <li key={article.id}>
                        <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Articles;