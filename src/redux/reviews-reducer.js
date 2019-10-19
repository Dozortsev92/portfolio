import {getReviews} from "../components/api/api";

const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const REMOVE_OPINION = 'REMOVE-OPINION';
const UPDATE_REVIEWS = 'UPDATE_REVIEWS';

let initialState = {
    reviews: [],
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_REVIEWS:
            return {
                reviews: action.reviews
            };
        case LIKE:
            return {
                ...state,
                reviews: state.reviews.map(review => {
                    if (review.id === +action.reviewId) {
                        if (review.opinion === null || review.opinion === 'dislike') {
                            if (review.opinion === 'dislike') {
                                return {
                                    ...review,
                                    likes: +review.likes + 1,
                                    dislikes: +review.dislikes - 1,
                                    opinion: 'like',
                                };
                            } else {
                                return {
                                    ...review,
                                    likes: +review.likes + 1,
                                    opinion: 'like',
                                };
                            }
                        }
                    }
                    return review;
                }),
            }
        case DISLIKE:
            return {
                ...state,
                reviews: state.reviews.map(review => {
                    if (review.id === +action.reviewId) {
                        if (review.opinion === null || review.opinion === 'like') {
                            if (review.opinion === 'like') {
                                return {
                                    ...review,
                                    likes: +review.likes - 1,
                                    dislikes: +review.dislikes + 1,
                                    opinion: 'dislike',
                                };
                            } else {
                                return {
                                    ...review,
                                    dislikes: +review.dislikes + 1,
                                    opinion: 'dislike',
                                };
                            }
                        }
                    }
                    return review;
                }),
            };
        case REMOVE_OPINION:
            return {
                ...state,
                reviews: state.reviews.map(review => {
                    if (review.id === +action.reviewId) {
                        if (review.opinion === 'like') {
                            return {
                                ...review,
                                likes: review.likes - 1,
                                opinion: null,
                            };
                        } else if (review.opinion === 'dislike') {
                            return {
                                ...review,
                                dislikes: review.dislikes - 1,
                                opinion: null,
                            };
                        }
                    }
                    return review;
                }),
            };
        default:
            return state;
    }
};

export const like = (reviewId) => ({type: LIKE, reviewId: reviewId});
export const dislike = (reviewId) => ({type: DISLIKE, reviewId: reviewId});
export const removeOpinion = (reviewId) => ({type: REMOVE_OPINION, reviewId: reviewId});
export const updateReviews = (reviews) => ({type: UPDATE_REVIEWS, reviews});


export const updateReviewsThunk = () => (dispatch) => {
    getReviews()
        .then( ({data}) => dispatch(updateReviews(data)) );
}

export default reviewsReducer;