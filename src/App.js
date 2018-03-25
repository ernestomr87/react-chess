import React, { Component } from 'react';
import Board from './components/Board'

const Chess = require('chess.js');


class App extends Component {
  state = {
    chess: null
  }

  handleStart = () => {
    const chess = new Chess();
    this.setState({
      chess: chess
    })

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleStart}>Start</button><br />
        {this.state.chess ? <Board chess={this.state.chess} /> : null}

      </div>
    );
  }
}

export default App;
