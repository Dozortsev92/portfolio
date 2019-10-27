import React from "react";

const Page404 = ({location}) => {
    return (
        <>
            <img src="https://www.studyexpo.com/images/icons/404.png" alt=""/>
            <p>There is no page on: {location.pathname}</p>
        </>
    )
};

export default Page404;