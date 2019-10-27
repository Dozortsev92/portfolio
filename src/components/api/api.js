import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

// instanse REQUESTS
export const getPosts = () => instanse.get('posts');
export const getOnePost = postId => instanse.get('posts/' + postId);

// axios REQUESTS
export const getProjects = () => axios.get('/data/projects.json');
export const getReviews = () => axios.get('/data/reviews.json');