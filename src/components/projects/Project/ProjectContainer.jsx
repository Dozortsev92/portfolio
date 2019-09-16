import React from 'react';
import connect from "react-redux/lib/connect/connect";
import Review from './Reviews/Review';
import Project from "./Project";
import {addReviewCreator, updateNewReviewTextCreator} from "../../../redux/projectReview-reducer";

let mapStateToProps = (state, props) => {
    let currentProject = state.projects.projects.find(project => project.alias === props.match.params.alias);

    let reviews = '';
    let projectReviews = currentProject.reviews;
    if (projectReviews) {
        reviews = projectReviews.map(
            (review, index) => <Review key={index} username={review.username} text={review.text}
                                       avatar={review.avatar}/>
        );
    }
    return {
        project: currentProject,
        reviews: reviews,
        newReviewText: state.projects.newReviewText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendReview: (review) => {
            console.log(review);
            dispatch(addReviewCreator(review))
        },
        writeInTextarea: (text) => {
            dispatch(updateNewReviewTextCreator(text))
        },
    };
};

let ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);


export default ProjectContainer;