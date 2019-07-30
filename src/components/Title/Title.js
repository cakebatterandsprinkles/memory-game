import React from "react";
import "./Title.css"

function Title(props) {
    return <nav
        className="navbar nav fixed-top navbar-light bg-info justify-content-between sticky">
        <div className="container">
            <span className="text-light">{props.children}</span>
            <span className="text-light">{props.message}</span>
            <span className="text-light">Top Score: {props.topScore}</span>
            <span className="text-light">Score: {props.score}</span>
        </div>
    </nav>;
}

export default Title;