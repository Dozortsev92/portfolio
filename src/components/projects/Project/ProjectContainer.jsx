import React from 'react';
import Review from './Reviews/Review';
import {addReviewCreator, updateNewReviewTextCreator} from "../../../redux/projectReview-reducer";
import Project from "./Project";

const ProjectContainer = (props) => {

    /*find current project*/
    let currentProject = props.projects.find(project => project.alias === props.match.params.alias);

    /* build the project reviews*/
    let reviews = '';
    let projectReviews = currentProject.reviews;
    if (projectReviews) {
        reviews = projectReviews.map(
            (review, index) => <Review key={index} username={review.username} text={review.text}
                                       avatar={review.avatar}/>
        );
    }

    let sendReview = (review) => {
        props.dispatch(addReviewCreator(review));
    };

    let writeInTextarea = (text) => {
        props.dispatch(updateNewReviewTextCreator(text));
    };

    return <Project project={currentProject} reviews={reviews} writeInTextarea={writeInTextarea} sendReview={sendReview} />
}

export default ProjectContainer;