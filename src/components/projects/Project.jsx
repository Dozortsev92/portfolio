import React from 'react';

const Project = (props) => {
    let currentProject = props.projects.find(project => project.alias === props.match.params.alias);
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
                            <textarea className="reviews__textarea" name="review_new" cols="50"></textarea>
                            <div className="reviews__button">
                                <button>Send review</button>
                            </div>
                        </div>
                        <div className="col-12 review">
                            <div className="row">
                                <div className="col-12 col-sm-2">
                                    <div className="project__review__avatar">
                                        <img src="/images/avatars/lbat.png" alt="lego batman"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-10">
                                    <div className="review__nickname">Lego Batman</div>
                                    <div className="review__text">Great house. Amazing!</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 review">
                            <div className="row">
                                <div className="col-12 col-sm-2">
                                    <div className="project__review__avatar">
                                        <img src="/images/avatars/lsup.png" alt="lego batman"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-10">
                                    <div className="review__nickname">Lego Superman</div>
                                    <div className="review__text">Nice project. So beautiful!!!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;