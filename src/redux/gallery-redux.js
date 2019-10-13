const UPDATE_ALBUMS = 'UPDATE_ALBUMS';

let initialState = {
    albums: null,
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ALBUMS:
            return {
                ...state,
                albums: [...action.albums],
            };
        default:
            return state;
    }
};

export const updateGallery = (albums) => ({type: UPDATE_ALBUMS, albums});

export default galleryReducer;
