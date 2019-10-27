import React from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Project from "./Project";
import {compose} from "redux";
import {getTheProjectThunk} from "../../redux/project-reducer";

class ProjectContainer extends React.Component {
    componentDidMount() {
        this.props.getTheProjectThunk(this.props.match.params.alias);
    }

    render() {
        return <Project project={this.props.project}/>
    }
}

const mapStateToProps = state => ({project: state.project});

export default compose(
    connect(mapStateToProps, {getTheProjectThunk}),
    withRouter
)(ProjectContainer);