import React from 'react';

const Project = (props) => {
    let textarea = React.createRef();

    let onSendReview = () => {
        if (textarea.current.value.length > 0) {
            let newReview = {
                username: 'Test User',
                text: props.project.newReviewText,
                avatar: '/images/avatars/ljoker.png',
            };
            props.sendReview(newReview);
            textarea.current.value = '';
        }
    };

    let onWriteInTextarea = () => {
        props.writeInTextarea(textarea.current.value);
    };
    return (
        <div>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{props.project.title}</h1>
            </div>
            <div className="projects project">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-6">
                        <img src={props.project.image} alt="" title=""/>
                    </div>
                    <div className="col-md-6">
                        <p><b>Descriptions:</b> {props.project.description}</p>
                        <p><b>Price:</b> {props.project.price} руб.</p>
                    </div>
                </div>
                <div className="reviews">
                    <div className="h2">Reviews</div>
                    <div className="row">
                        <div className="col-12">
                            <textarea onChange={onWriteInTextarea} className="reviews__textarea" name="review_new"
                                      cols="50"
                                      ref={textarea} value={props.project.newReviewText}>
                            </textarea>
                            <div className="reviews__button">
                                <button onClick={onSendReview}>Send review</button>
                            </div>
                        </div>
                        {props.reviews}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;