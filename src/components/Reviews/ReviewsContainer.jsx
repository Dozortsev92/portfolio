import React from 'react';
import Reviews from "./Reviews";
import connect from "react-redux/lib/connect/connect";
import {dislikeAC, likeAC, removeOpinionAC} from "../../redux/allReviews-reducer";

let mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        likeReview: (reviewId) => {
            dispatch(likeAC(reviewId));
        },
        dislikeReview: (reviewId) => {
            dispatch(dislikeAC(reviewId));
        },
        removeOpinion: (reviewId) => {
            dispatch(removeOpinionAC(reviewId));
        },
    };
};

let ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;