import React from 'react';

let Reviews = (props) => {
    let like = e => {
        props.likeReview(e.target.id);
    };

    let dislike = e => {
        props.dislikeReview(e.target.id);
    };

    let remove = e => {
        props.removeOpinion(e.target.id);
    };

    let reviews = props.reviews.reviews.map((review, index) => {
        return (
            <div key={index} className="row">
                <div className="col-md-2">
                    <p><img src={review.avatar} alt={review.username} style={{maxWidth: 100}}/></p>
                </div>
                <div className="col-md-10">
                    <p>username: {review.username}</p>
                    <p>text: {review.text}</p>
                    <p>
                        <button className={review.opinion === 'like' ? 'liked' : ''} id={review.id}
                                onClick={review.opinion === 'like' ? remove : like}>like({review.likes})
                        </button>
                        &nbsp;
                        <button className={review.opinion === 'dislike' ? 'disliked' : ''} id={review.id}
                                onClick={review.opinion === 'dislike' ? remove : dislike}>dislike({review.dislikes})
                        </button>
                    </p>
                </div>
            </div>
        );
    });

    return (
        <div>
            {reviews}
        </div>
    );
};

export default Reviews;