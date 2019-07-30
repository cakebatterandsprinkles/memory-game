import React, {Component} from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import Title from "./components/Title/Title";
import characters from "./characters.json";

class App extends Component {

    state = {
        characters: characters,
        score: 0,
        topScore: 0,
        clicked: false
    };

    clickCharacter = id => {
        const character = this
            .state
            .characters
            .filter(item => item.id === id)[0];
        if (character.clicked) {
            this
                .state
                .characters
                .forEach(element => {
                    element.clicked = false;
                });

            this.setState({characters: characters, score: 0});

        } else {
            character.clicked = true;
            const newScore = this.state.score + 1;
            const topScore = Math.max(this.state.topScore, newScore);
            this.setState({characters: this.state.characters, score: newScore, topScore: topScore});
        }
    };

    render() {
        return (
            <div>
                <Title
                    score={this.state.score}
                    topScore={this.state.topScore}
                    message={this.state.score === 12
                    ? "YOU WON!"
                    : ""}>
                    Memory Game</Title>
                <div className="container">
                    <div className="row">
                        {this
                            .state
                            .characters
                            .sort((a, b) => Math.random() - 0.5)
                            .map(friend => (<CharacterCard
                                clickCharacter={this.clickCharacter}
                                id={friend.id}
                                image={friend.image}/>))}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;