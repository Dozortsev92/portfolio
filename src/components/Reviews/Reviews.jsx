import React from 'react';
import {Button, Card} from 'antd';

let Reviews = props => {
    const like = e => props.like(e.target.id);
    const dislike = e => props.dislike(e.target.id);
    const remove = e => props.removeOpinion(e.target.id);

    let reviews = props.reviews.map((review, index) => {
        const {avatar, username, text, opinion, id, likes, dislikes} = review;
        return (
            <Card key={index}>
                <div className="row">
                    <div className="col-md-2">
                        <p><img src={avatar} alt={username} style={{maxWidth: 100}}/></p>
                    </div>
                    <div className="col-md-10">
                        <p><b>Username</b>: {username}</p>
                        <p><b>Text</b>: {text}</p>
                        <p>
                            <Button type={opinion === 'like' ? 'primary' : 'default'}
                                    id={id}
                                    onClick={opinion === 'like' ? remove : like}>
                                like({likes})
                            </Button>
                            <Button type={opinion === 'dislike' ? 'danger' : 'default'}
                                    id={id}
                                    onClick={opinion === 'dislike' ? remove : dislike}>
                                dislike({dislikes})
                            </Button>
                        </p>
                    </div>
                </div>
            </Card>
        );
    });

    return (
        <div>
            {reviews}
        </div>
    );
};

export default Reviews;