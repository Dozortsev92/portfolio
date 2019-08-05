import React from 'react';
import ProjectsList from './ProjectsList';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortDir: 'DESC',
            sortBy: 'years',
        };
    }

    handleClick = () => { this.state.sortDir === 'DESC' ? this.setState({ sortDir: 'ASC' }) : this.setState({ sortDir: 'DESC' }); }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h1 className="h2">Projects</h1>
                </div>
                <button onClick={this.handleClick}>Sort by years</button>
                <ProjectsList projects={this.props.projects} sortDir={this.state.sortDir} />
            </div>
        );
    }
}

export default Projects;