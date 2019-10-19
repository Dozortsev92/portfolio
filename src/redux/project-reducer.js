let UPDATE_PROJECT = 'UPDATE_PROJECT';

const initialState = {

};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROJECT:
            return action.project;
        default:
            return state;
    }
};

export const getProject = (project) => ({type: UPDATE_PROJECT, project});

export default projectReducer;