import React from 'react';
import Reviews from "./Reviews";
import {connect} from "react-redux";
import {dislike, like, removeOpinion, updateReviews, updateReviewsThunk} from "../../redux/reviews-reducer";
import {getReviews} from "../api/api";

class ReviewsContainer extends React.Component {
    componentDidMount() {
        this.props.updateReviewsThunk();
    }

    render() {
        return (
            !this.props.reviews
                ? ''
                : <Reviews
                    reviews={this.props.reviews.reviews}
                    like={this.props.like}
                    dislike={this.props.dislike}
                    removeOpinion={this.props.removeOpinion}
                    updateReviews={this.props.updateReviews} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
    };
};

export default connect(mapStateToProps, {like, dislike, removeOpinion, updateReviews, updateReviewsThunk})(ReviewsContainer);