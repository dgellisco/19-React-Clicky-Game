// Import react
import React, { Component } from "react";
// Import components
import Footer from "./components/Footer";
import Game from "./components/Game";
import GameItem from "./components/GameItem";
import Header from "./components/Header";
import Scoreboard from "./components/Scoreboard";
// Import JSON
import characters from "./characters.json"
// Default imports
import logo from "./logo.svg";
import "./App.css";

class App extends Component {

  constructor() {
    super()

    this.handleShuffleCharacters = this.handleShuffleCharacters.bind(this)
  }

  state = {
    score: 0,
    highScore: 0,
    maxScore: 9,
    message: "Welcome!  Click an image.",
    messageClass: "",
    characters: characters
  }

  shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    let tempValue;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      tempValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = tempValue;
    }
    return array;
  }

  handleRenderCharacters = () => {
    return this.state.characters.map((character) =>
      <GameItem
        image={character.image}
        name={character.name}
        key={character.id}
        onClick={this.handleShuffleCharacters}
      />
    );
  }

  handleShuffleCharacters = (name) => {
    var resetNeeded = false;
    const characters = this.state.characters.map(character => {
      if (character.name === name) {
        if (character.isClicked === false) {
          this.handleCorrectPick();
          return { ...character, isClicked: true }
        } else {
          resetNeeded = true;
          return { ...character, isClicked: false }
        }
      }
      return character;
    });

    if (resetNeeded) {
      this.setState({
        characters: this.shuffle(this.handleWrongPick()),
        messageClass: "incorrect"
      })
    
    } else {
      this.setState({ characters: this.shuffle(this.handleResetWin(characters)) })
    }

  }

  handleCorrectPick = () => {
    if (this.state.score + 1 > this.state.highScore) {
      this.setState({highScore: this.state.highScore + 1})
    }
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({score: this.state.score + 1, message: "You win", messageClass: "correct"});
    } else {
      this.setState({score: this.state.score + 1, message: "Correct", messageClass: "correct"});
    }
  }

  handleWrongPick = () => {
    this.setState({score: 0, message: "Incorrect"});
    const updatedCharacters = this.state.characters.map(character => character.isClicked === true ? { ...character, isClicked: false } : character);
    return updatedCharacters;
  }

  handleResetWin = (currentCharacters) => {
    if (this.state.score + 1 === this.state.maxScore) {
      this.setState({ score: 0, highScore: 0});
      const updatedCharacters = currentCharacters.map(character => (true) ? { ...character, isClicked: false } : character)
      return updatedCharacters;
    } else {
      return currentCharacters;
    }
  }

  render() {
    return (
      <div className="App">
        <Scoreboard
          score = {this.state.score}
          highScore = {this.state.highScore}
          message = {this.state.message}
          messageClass = {this.state.messageClass}
        />
        <Header />
        <Game />
        <div class="game-div">
          {this.handleRenderCharacters()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
