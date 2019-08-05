import React from 'react';

const Project = (props) => {
    let currentProject = props.projects.find(project => project.alias === props.match.params.alias);
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">{currentProject.title}</h1>
            </div>
            <div className="projects">
                <div className="row">
                    <div className="col-md-12">
                    </div>
                    <div className="col-md-6">
                        <img src={currentProject.image} alt="" title="" />
                    </div>
                    <div className="col-md-6">
                        <p><b>Descriptions:</b> {currentProject.description}</p>
                        <p><b>Price:</b> {currentProject.price} руб.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;