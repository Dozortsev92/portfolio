import React from 'react';
import Projects from './projects/Projects';
import Project from './projects/Project/Project';
import Home from './Home';
import { Route } from 'react-router-dom';

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
            <Route exact path='/projects/:alias' render={(prop) => <Project {...prop} projects={props.state.projects} addReview={props.addReview} />} />
        </div>
    );
};

export default Content;