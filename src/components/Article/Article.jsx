import React from 'react';

let Article = (props) => {
    return (
        <div>
            <h3>id: {props.article.id}</h3>
            <h3>userId: {props.article.userId}</h3>
            <b>Title: {props.article.title}</b>
            <p>{props.article.body}</p>
        </div>
    )
};

export default Article;