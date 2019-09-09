const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';
const ADD_REVIEW = 'ADD-REVIEW';

const projectReviewReducer = (state, action) => {
    switch (action.type) {
        case ADD_REVIEW:
            let newReview = {
                text: action.text.text,
                username: action.text.username,
                avatar: action.text.avatar,
            };
            state.reviews.push(newReview);
            state.newReviewText = '';
            return state;

        case UPDATE_NEW_REVIEW_TEXT:
            state.newReviewText = action.text;
            return state;
    }
}

export const updateNewReviewTextCreator = (text) => ({type: UPDATE_NEW_REVIEW_TEXT, text: text});
export const addReviewCreator = (review) => ({type: ADD_REVIEW, text: review});

export default projectReviewReducer;