import React from 'react';

const Review = (props) => {
    return (
        <div className="col-12 review">
            <div className="row">
                <div className="col-12 col-sm-2">
                    <div className="project__review__avatar">
                        <img src={props.avatar} alt="lego batman" />
                    </div>
                </div>
                <div className="col-12 col-sm-10">
                    <div className="review__nickname">{props.username}</div>
                    <div className="review__text">{props.text}</div>
                </div>
            </div>
        </div>
    );
};

export default Review;