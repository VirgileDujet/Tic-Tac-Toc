import React from 'react';

import '../index.css';
import Square from '../Component/Square.js'

class Board extends React.Component {
  constructor(props) {
    super(props);
    //POSSEDE UN TABLEA DE CARRE REMPLIS A NULL , ET UNE VAR TOUR
    this.state = {
      squares: Array(9).fill(null),
      tour: true,
    };
  }

///FONCTION PUR RECOMMENCER
  reset()
  {
    this.setState({squares : Array(9).fill(null), tour : true})
  }

  handleClick(i) {
    ///FOCNTION QUAND ON APPUIE
    ///SI IL Y A UN GAGNANT NE FAIT RIEN
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    ///CHANGEMENT DE LA VALEUR DU CARRE
    squares[i] = this.state.tour ? 'X' : 'O';
    this.setState({
      squares: squares,
      tour: !this.state.tour,
    });
  }

  renderSquare(i) {
    ///ON PASSE AU CARRE VALUE ET SA FONCTION QUAND ON CLIQUE DESSUS SERA : HANDLECLICK
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    ///AFFICHAGE
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Gagnant : ' + winner;
    } else {
      status = 'Prochain joueur: ' + (this.state.tour ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <button
          //BOUTON RESET
          onClick={() => this.reset()}
        >
        {"reset"}
        </button>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
