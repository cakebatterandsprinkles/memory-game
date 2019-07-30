import React from "react";
import "./Title.css"

function Title(props) {
    return <nav
        class="navbar navbar-expand-lg navbar-light bg-info justify-content-between">
        <div className="container">
            <span class="text-light">{props.children}</span>
            <span class="text-light">{props.message}</span>
            <span class="text-light">Top Score: {props.topScore}</span>
            <span class="text-light">Score: {props.score}</span>
        </div>
    </nav>;
}

export default Title;