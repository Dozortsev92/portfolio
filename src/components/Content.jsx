import React from 'react';
import Projects from './projects/Projects';
import Home from './Home';
import { Route } from 'react-router-dom';
import ProjectContainer from "./projects/Project/ProjectContainer";

const Content = (props) => {
    // let routeElements = projects.map( project => <Route exact path={`/projects/${project.alias}`} component={Project} />);
    return (
        <div role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
            <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                    <div className="chartjs-size-monitor-div1"></div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                    <div className="chartjs-size-monitor-div2"></div>
                </div>
            </div>
            <Route exact path='/' component={Home} />
            <Route exact path='/projects' render={() => <Projects projects={props.state.projects} />} />
            <Route exact path='/projects/:alias' render={(prop) => <ProjectContainer {...prop} store={props.store} projects={props.state.projects} dispatch={props.dispatch} />} />
        </div>
    );
};

export default Content;