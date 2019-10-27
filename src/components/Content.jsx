import React from 'react';
import Home from './Home';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router';
import ProjectContainer from "./Project/ProjectContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";
import ArticleContainer from "./Article/ArticleContainer";
import ProjectsContainer from "./Projects/ProjectsContainer";
import Page404 from "./Page404";

const Content = () => {
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
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/projects' render={() => <ProjectsContainer/>}/>
                <Route exact path='/articles' render={() => <ArticlesContainer/>}/>
                <Route exact path='/reviews' render={() => <ReviewsContainer/>}/>
                <Route exact path='/projects/:alias' render={() => <ProjectContainer/>}/>
                <Route exact path='/articles/:alias' render={() => <ArticleContainer/>}/>
                <Route component={Page404}/>
            </Switch>
        </div>
    );
};

export default Content;