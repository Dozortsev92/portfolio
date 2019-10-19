import React from 'react';
import {getProjects} from "../api/api";
import {updateProjects} from "../../redux/projects-reducer";
import {connect} from "react-redux";
import ProjectPreview from "./ProjectPreview";

class ProjectsContainer extends React.Component {
    componentDidMount() {
        getProjects()
            .then(({data}) => this.props.updateProjects(data));
    }

    render() {
        return (
            <div className="projects">
                <div className="row m-0">
                    {this.props.projects.items
                        ? this.props.projects.items.map(project => <ProjectPreview key={project.id} project={project}/>)
                        : ''}
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps, {updateProjects})(ProjectsContainer);