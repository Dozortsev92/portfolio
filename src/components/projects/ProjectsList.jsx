import React from 'react';
import ProjectPreview from './ProjectPreview';

const ProjectsList = (props) => {
    let projectsElements = props.projects.map(project => <ProjectPreview key={project.id} project={project} />);
    let result = '';
    switch(props.sortDir) {
        case 'ASC': result = projectsElements.sort((a,b) => +a.props.project.year - +b.props.project.year); break;
        case 'DESC': result = projectsElements.sort((a,b) => +b.props.project.year - +a.props.project.year ); break;
        default: result = projectsElements;
    }
    
    return (
        <div className="projects">
            <div className="row m-0">
                { result }
            </div>
        </div>
    );
};

export default ProjectsList;