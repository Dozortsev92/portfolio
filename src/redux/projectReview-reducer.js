const UPDATE_NEW_REVIEW_TEXT = 'UPDATE-NEW-REVIEW-TEXT';
const ADD_REVIEW = 'ADD-REVIEW';

let initialState = {
    projects: [
        {
            id: 11,
            alias: 'project-1',
            year: 2003,
            title: 'Проект “Ласточка”',
            squares: '130',
            price: '4 200 000',
            image: '/images/image1.jpg',
            description: 'La la la description 111',
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
        },
        {
            'id': 22,
            'alias': 'project-2',
            'year': 2002,
            'title': 'Проект “Ласточка 1”',
            'squares': '164',
            'price': '5 265 000',
            'image': '/images/image2.jpg',
            'description': 'La la la description 222'
        },
        {
            'id': 33,
            'alias': 'project-3',
            'year': 2004,
            'title': 'Проект “Милино 1',
            'squares': '223,4',
            'price': '5 950 000',
            'image': '/images/image3.jpg',
            'description': 'La la la description 333'
        },
        {
            'id': 44,
            'alias': 'project-4',
            'year': 2001,
            'title': 'Проект “Милино 2',
            'squares': '202',
            'price': '5 650 000',
            'image': '/images/image4.jpg',
            'description': 'La la la description 444'
        },
        {
            'id': 55,
            'alias': 'project-5',
            'year': 2005,
            'title': 'Проект “Милино 3',
            'squares': '213',
            'price': '5 700 000',
            'image': '/images/image5.jpg',
            'description': 'La la la description 555'
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
                newReviewText: action.text,
            };
        default:
            return state;
    }
}

export const updateNewReviewTextCreator = (text) => ({type: UPDATE_NEW_REVIEW_TEXT, text: text});
export const addReviewCreator = (review) => ({type: ADD_REVIEW, text: review});

export default projectReviewReducer;