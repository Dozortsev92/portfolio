import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectPreview = (props) => {
    let path = '/Projects/';
    return (
        <div className="slide col-md-4">
            <div className="project">
                <div className="image">
                    <img src={props.project.image} alt="Проект “Ласточка”" />
                </div>
                <div className="title">{props.project.title}</div>
                <div className="characters">
                    <div className="first">Общая площадь {props.project.squares} м.кв</div>
                    <div className="last">Year {props.project.year}</div>
                </div>
                <div className="text-center">
                    <NavLink exact to={path + props.project.alias} className="button">Подробнее</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;