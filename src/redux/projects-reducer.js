import {getProjects} from "../components/api/api";

const UPDATE_PROJETS = 'UPDATE_PROJETS';

let initialState = {
    items: null
};

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROJETS:
            return {
                ...state,
                items: action.projects
            };
        default:
            return state;
    }
}

export const updateProjects = projects => ({type: UPDATE_PROJETS, projects});

export const getAllProjectsThunk = () => dispatch => {
    getProjects()
        .then(({data}) => dispatch(updateProjects(data)));
};

export default projectsReducer;