import React from 'react';
import Review from './Reviews/Review';

const Project = (props) => {

    /*find current project*/
    let currentProject = props.projects.find(project => project.alias === props.match.params.alias);

    /* build project reviews*/
    let reviews = '';
    let projectReviews = currentProject.reviews;
    if (projectReviews) {
        reviews = projectReviews.map(
            review => <Review key={review.id} username={review.username}
                              text={review.text}
                              avatar={review.avatar} />
        );
    }

    let textarea = React.createRef();

    let sendReview = () => {
        console.log('send');
        let newReview = {
            username: 'Test User',
            text: textarea.current.value,
            avatar: '/images/avatars/ljoker.png',
        };

        props.addReview(newReview);
    };

    let writeReview = () => {
        console.log('Tap');
    };
    return (
        <div>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{currentProject.title}</h1>
            </div>
            <div className="projects project">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-6">
                        <img src={currentProject.image} alt="" title=""/>
                    </div>
                    <div className="col-md-6">
                        <p><b>Descriptions:</b> {currentProject.description}</p>
                        <p><b>Price:</b> {currentProject.price} руб.</p>
                    </div>
                </div>
                <div className="reviews">
                    <div className="h2">Reviews</div>
                    <div className="row">
                        <div className="col-12">
                            <textarea onInput={writeReview} className="reviews__textarea" name="review_new" cols="50" ref={textarea}></textarea>
                            <div className="reviews__button">
                                <button onClick={sendReview}>Send review</button>
                            </div>
                        </div>
                        {reviews}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;