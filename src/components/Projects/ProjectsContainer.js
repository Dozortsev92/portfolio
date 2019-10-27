import React from 'react';
import {getAllProjectsThunk} from "../../redux/projects-reducer";
import {connect} from "react-redux";
import ProjectPreview from "./ProjectPreview";
import {Button} from 'antd';
import orderBy from 'lodash/orderBy';
import s from './ProjectsContainer.module.css';

class ProjectsContainer extends React.Component {
    componentDidMount() {
        this.props.getAllProjectsThunk();
    }

    state = {
        sortBy: 'title',
        sortDir: 'asc',
        sortByVariants: ['title', 'year', 'squares'],
    }

    handleSortChange = e => {
        const targetSortBy = e.target.value;
        const {sortBy, sortDir} = this.state;

        if (targetSortBy === sortBy) {
            if (sortDir === 'asc') {
                this.setState({sortDir: 'desc'});
            } else {
                this.setState({sortDir: 'asc'});
            }
        } else {
            this.setState({sortBy: targetSortBy, sortDir: 'asc'});
        }
    }

    render() {
        const {items} = this.props.projects;
        const {sortBy, sortDir, sortByVariants} = this.state;

        return (
            <div className="projects">
                <div className="col-md-12">
                    <div className={s.projects__sorting}>
                        <div className={s.projects__sorting__title}>Sorting: </div>
                        <Button.Group>
                            {sortByVariants.map(title =>
                                <Button value={title}
                                        onClick={this.handleSortChange}
                                        type={sortBy === title ? 'primary' : 'default'}
                                        icon={`sort-${sortBy === title ? sortDir : 'asc'}ending`}>
                                    {title[0].toUpperCase() + title.slice(1)}
                                </Button>
                            )}
                        </Button.Group>
                    </div>
                </div>
                <div className="row m-0">
                    {items && orderBy(items, [sortBy], [sortDir]).map(
                        project => <ProjectPreview key={project.id} project={project}/>
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({projects: state.projects});

export default connect(mapStateToProps, {getAllProjectsThunk})(ProjectsContainer);