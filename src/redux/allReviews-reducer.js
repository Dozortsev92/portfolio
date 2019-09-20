const LIKE = 'LIKE';
const DISLIKE = 'DISLIKE';
const REMOVE_OPINION = 'REMOVE-OPINION';

let initialState = {
    reviews: [
        {
            id: 1,
            projectId: 11,
            username: 'Lego Batman',
            text: 'Great house. Amazing!',
            avatar: '/images/avatars/lbat2.png',
            likes: 321,
            dislikes: 2,
            opinion: null,
        },
        {
            id: 2,
            projectId: 33,
            username: 'Lego Superman',
            text: 'Nice project. So beautiful!!!',
            avatar: '/images/avatars/lsup.png',
            likes: 10,
            dislikes: 11,
            opinion: null,
        },
        {
            id: 3,
            projectId: 33,
            username: 'Lego Superman',
            text: 'Nice project. So beautiful!!!',
            avatar: '/images/avatars/lsup.png',
            likes: 12,
            dislikes: 2,
            opinion: null,
        },
        {
            id: 4,
            projectId: 33,
            username: 'Lego Superman',
            text: 'Nice project. So beautiful!!!',
            avatar: '/images/avatars/lsup.png',
            likes: 13,
            dislikes: 3,
            opinion: null,
        },
        {
            id: 5,
            projectId: 44,
            username: 'Lego Superman',
            text: 'Nice project. So beautiful!!!',
            avatar: '/images/avatars/lsup.png',
            likes: 14,
            dislikes: 4,
            opinion: null,
        },
        {
            id: 6,
            projectId: 44,
            username: 'Lego Superman',
            text: 'Nice project. So beautiful!!!',
            avatar: '/images/avatars/lsup.png',
            likes: 15,
            dislikes: 5,
            opinion: null,
        },
    ],
    newReviewText: 'new review placeholder text',
};

const allReviewsReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const likeAC = (reviewId) => ({type: LIKE, reviewId: reviewId});
export const dislikeAC = (reviewId) => ({type: DISLIKE, reviewId: reviewId});
export const removeOpinionAC = (reviewId) => ({type: REMOVE_OPINION, reviewId: reviewId});

export default allReviewsReducer;