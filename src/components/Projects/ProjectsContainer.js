import React from 'react';
import {getAllProjectsThunk} from "../../redux/projects-reducer";
import {connect} from "react-redux";
import ProjectPreview from "./ProjectPreview";
import {Button, Input} from 'antd';
import orderBy from 'lodash/orderBy';
import s from './ProjectsContainer.module.css';

const {Search} = Input;

class ProjectsContainer extends React.Component {
    componentDidMount() {
        this.props.getAllProjectsThunk();
    }

    state = {
        sortBy: 'title',
        sortDir: 'asc',
        sortByVariants: ['title', 'year', 'squares'],
        searchQuery: '',
    }

    onSearch = e => {
        const value = e.target.value;
        this.setState({searchQuery: value});
    }

    handleSortChange = e => {
        const targetSortBy = e.target.value;
        const {sortBy, sortDir, searchQuery} = this.state;

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
        const {sortBy, sortDir, sortByVariants, searchQuery} = this.state;
        let {items} = this.props.projects;
        let itemsAfterOrder;
        if (items) {
            let itemsAfterFilter = items.filter(
                project =>
                    project.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
                    project.year.toString().toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
            );

            itemsAfterOrder = orderBy(itemsAfterFilter, [sortBy], [sortDir]).map(
                project => <ProjectPreview key={project.id} project={project}/>
            );
        }


        return (
            <div className="projects">
                <div className="col-md-12">
                    <div className={`${s.projects__sorting} ${s.d_inline_block}`}>
                        <div className={s.projects__sorting__title}>Sorting:</div>
                        <Button.Group>
                            {sortByVariants.map((title, index) =>
                                <Button key={index} value={title}
                                        onClick={this.handleSortChange}
                                        type={sortBy === title ? 'primary' : 'default'}
                                        icon={`sort-${sortBy === title ? sortDir : 'asc'}ending`}>
                                    {title[0].toUpperCase() + title.slice(1)}
                                </Button>
                            )}
                        </Button.Group>
                    </div>
                    <div className={`${s.projects__searching} ${s.d_inline_block}`}>
                        <Search
                            placeholder="Enter title or year"
                            onChange={this.onSearch}
                            value={searchQuery}
                            style={{width: 200}}
                        />
                    </div>
                </div>
                <div className="row m-0">
                    {itemsAfterOrder}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({projects: state.projects});

export default connect(mapStateToProps, {getAllProjectsThunk})(ProjectsContainer);