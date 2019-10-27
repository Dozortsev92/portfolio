import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectPreview = (props) => {
    const path = '/projects/';
    const {image, title, squares, year, alias} = props.project;
    return (
        <div className="slide col-md-4">
            <div className="project">
                <div className="image">
                    <img src={image} alt="Проект “Ласточка”" />
                </div>
                <div className="title">{title}</div>
                <div className="characters">
                    <div className="first">Общая площадь {squares} м.кв</div>
                    <div className="last">Year {year}</div>
                </div>
                <div className="text-center">
                    <NavLink exact to={path + alias} className="button">Подробнее</NavLink>
                </div>
            </div>
        </div>
    );
};

export default ProjectPreview;