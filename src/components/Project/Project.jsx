import React from 'react';

const Project = props => {
    const {title, image, description, price} = props.project;
    return (
        <div>
            <div
                className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{title}</h1>
            </div>
            <div className="projects project">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-6">
                        <img src={image} alt="" title=""/>
                    </div>
                    <div className="col-md-6">
                        <p><b>Descriptions:</b> {description}</p>
                        <p><b>Price:</b> {price} руб.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;