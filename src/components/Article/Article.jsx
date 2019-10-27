import React from 'react';

let Article = props => {
    const {id, userId, title, body} = props.article;
    return (
        <div>
            <h3>id: {id}</h3>
            <h3>userId: {userId}</h3>
            <b>Title: {title}</b>
            <p>{body}</p>
        </div>
    )
};

export default Article;