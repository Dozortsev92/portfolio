import React from 'react';
import Reviews from "./Reviews";
import {connect} from "react-redux";
import * as reviewsActions from "../../redux/reviews-reducer";
import {bindActionCreators} from "redux";

class ReviewsContainer extends React.Component {
    componentDidMount() {
        this.props.updateReviewsThunk();
    }

    render() {
        let {reviews, like, dislike, removeOpinion, updateReviews} = this.props;
        if (reviews)
            return (
                <Reviews reviews={reviews.reviews}
                         like={like}
                         dislike={dislike}
                         removeOpinion={removeOpinion}
                         updateReviews={updateReviews}/>
            )
    }
}

const mapStateToProps = state => ({reviews: state.reviews});

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(reviewsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);