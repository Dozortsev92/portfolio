import {getProjects} from "../components/api/api";

let UPDATE_PROJECT = 'UPDATE_PROJECT';

const initialState = {};

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PROJECT:
            return action.project;
        default:
            return state;
    }
};

export const updateProject = project => ({type: UPDATE_PROJECT, project});

export const getTheProjectThunk = alias => dispatch => {
    getProjects()
        .then(({data}) => data.filter(el => el.alias === alias))
        .then(project => dispatch(updateProject(project[0])));
};

export default projectReducer;