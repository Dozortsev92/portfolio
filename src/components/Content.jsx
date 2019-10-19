import React from 'react';
import Home from './Home';
import {Route} from 'react-router-dom';
import ProjectContainer from "./Project/ProjectContainer";
import ReviewsContainer from "./Reviews/ReviewsContainer";
import ArticlesContainer from "./Articles/ArticlesContainer";
import ArticleContainer from "./Article/ArticleContainer";
import GalleryContainer from "./Gallery/GalleryContainer";
import ProjectsContainer from "./Projects/ProjectsContainer";

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
            <Route exact path='/' component={Home}/>
            <Route exact path='/projects' render={() => <ProjectsContainer/>}/>
            <Route exact path='/articles' render={() => <ArticlesContainer/>}/>
            <Route exact path='/reviews' render={() => <ReviewsContainer/>}/>
            <Route exact path='/gallery' render={() => <GalleryContainer/>}/>
            <Route exact path='/projects/:alias' render={(prop) => <ProjectContainer/>}/>
            <Route exact path='/articles/:alias' render={() => <ArticleContainer/>}/>
        </div>
    );
};

export default Content;