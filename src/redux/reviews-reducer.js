const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';
const ADD_REVIEW = 'ADD-REVIEW';

let initialState = {
    reviews: [
        {
            username: 'Lego Batman',
            text: 'Great house. Amazing!',
            avatar: '/images/avatars/lbat2.png',
        },
        {
            username: 'Lego Superman',
            text: 'Nice project. So beautiful!!!',
            avatar: '/images/avatars/lsup.png',
        },
    ],
    newReviewText: 'new review placeholder text',
};

const projectReviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            let newReview = {
                text: action.text.text,
                username: action.text.username,
                avatar: action.text.avatar,
            };
            let stateCopy = {
                ...state,
                newReviewText: ''
            };
            stateCopy.projects[0].reviews = [...state.projects[0].reviews, newReview]
            return stateCopy;

        case
        UPDATE_NEW_REVIEW_TEXT:
            return {
                ...state,
                newReviewText: ''
            };
        default:
            return state;
    }
}

export const updateNewReviewTextCreator = (text) => ({type: UPDATE_NEW_REVIEW_TEXT, text: text});
export const addReviewCreator = (review) => ({type: ADD_REVIEW, text: review});

export default projectReviewReducer;