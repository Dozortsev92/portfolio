import React from 'react';

const Project = (props) => {
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
            </div>
        </div>
    );
}

export default Project;