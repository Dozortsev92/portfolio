import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Project from "./Project";
import * as axios from "axios";
import {getProject} from "../../redux/project-reducer";
import {compose} from "redux";

class ProjectContainer extends React.Component {
    componentDidMount() {
        axios.get('/data/projects.json')
            .then(({data}) => data.filter(el => el.alias === this.props.match.params.alias))
            .then(project => this.props.getProject(project[0]))
    }

    render() {
        return <Project project={this.props.project}/>
    }
}

let mapStateToProps = (state) => ({project: state.project});

export default compose(
    connect(mapStateToProps, {getProject}),
    withRouter
)(ProjectContainer);