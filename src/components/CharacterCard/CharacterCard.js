import React from "react";
import "./CharacterCard.css";

function CharacterCard(props) {
    return (
        <div onClick={cardClicked} className="col-lg-4 col-md-6 flex-container">
            <div class="card">
                <div class="view">
                    <img src={props.image} className="card-img-top" alt={props.id}/>
                    <div class="mask rgba-white-slight"></div>
                </div>
            </div>
        </div>

    );

    function cardClicked() {
        props.clickCharacter(props.id);
    }
}

export default CharacterCard;