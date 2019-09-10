import React from 'react';
import Review from './Reviews/Review';
import {addReviewCreator, updateNewReviewTextCreator} from "../../../redux/projectReview-reducer";
import Project from "./Project";
import connect from "react-redux/lib/connect/connect";

let mapStateToProps = (state, props) => {
    let currentProject = state.projects.find(project => project.alias === props.match.params.alias);

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
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        sendReview: (review) => {dispatch(addReviewCreator(review))},
        writeInTextarea: (text) => {dispatch(updateNewReviewTextCreator(text))},
    };
};

let ProjectContainer = connect(mapStateToProps, mapDispatchToProps)(Project);


export default ProjectContainer;