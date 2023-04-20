import React from "react";
import { useState, useEffect} from "react";
import Scoreboard from "./Scoreboard";
import PropTypes, { func } from 'prop-types'
import GameStatus from "./GameStatus";

const Board = ({playerOnePiece, playerTwoPiece, homePage, restart}) => {
const [squares, setSquares] = useState(Array(9).fill(null))
const [playerOneScore, setPlayerOneScore] = useState(0);
const [draws, setDraws] = useState(0);
const [playerTwoScore, setPlayerTwoScore] = useState(0);
const [gameFinished, setGameFinished] = useState(false);
const [playerTurn, setPlayerTurn] = useState(true);
const [gameDraw, setGameDraw] = useState(false);
const [winner, setWinner] = useState(null);


const winCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

useEffect(() => {
  calculateWinner(squares);
}, [squares]);
    
  function restart() {
    setSquares(Array(9).fill(null));
    setGameFinished(false);
    setGameDraw(false);
  };

  function clearHistory() {
    restart();
    setPlayerTurn(true);
    setGameDraw(false);
    setPlayerOneScore(0);
    setPlayerTwoScore(0);
    setDraws(0);
  };

  function returnHome(){
    homePage()
  };

const nextValue = calculateNextValue(squares)
  
  function selectSquare(square) {
    if(squares[square]) {
      return
    }
    const squaresCopy = [...squares]
    squaresCopy[square] = nextValue
    setSquares(squaresCopy)
  }
  function calculateNextValue(squares) {
    if (playerOnePiece == "X" && playerTurn == true) {
      return squares.filter(Boolean).length % 2 === 0 ? "X" : "O"
    } else if (playerOnePiece == "O" && playerTurn == true) {
      return squares.filter(Boolean).length % 2 === 0 ? "O" : "X"
    } else if (playerTwoPiece == "X" && playerTurn == false) {
      return squares.filter(Boolean).length % 2 === 0 ? "X" : "O"
    } else if (playerTwoPiece == "O" && playerTurn == false) {
      return squares.filter(Boolean).length % 2 === 0 ? "O" : "X"
    }
  };

  function calculateWinner(squares) {
    //* Check win for Cross
    for (let i = 0; i < 8; i++) {
      if(
        playerOnePiece==="X" && 
        squares[winCombination[i][0]] === "X" &&
        squares[winCombination[i][1]] === "X" &&
        squares[winCombination[i][2]] === "X"
      ) {
        setPlayerOneScore(playerOneScore + 1);
        setPlayerTurn(true);
        setGameFinished(true);
        setWinner(true);
        console.log("Player One WinsX");
        return;
      }
    }
    for (let i = 0; i < 8; i++) {
      if(
        playerTwoPiece==="X" && 
        squares[winCombination[i][0]] === "X" &&
        squares[winCombination[i][1]] === "X" &&
        squares[winCombination[i][2]] === "X"
      ) {
        setPlayerTwoScore(playerTwoScore + 1);
        setPlayerTurn(false);
        setGameFinished(true);
        setWinner(false);
        console.log("Player Two WinsX");
        return;
      }
    }

    //* Check win for Circle
    for (let i = 0; i < 8; i++) {
      if(
        playerOnePiece === "O" &&
        squares[winCombination[i][0]] === "O" &&
        squares[winCombination[i][1]] === "O" &&
        squares[winCombination[i][2]] === "O"
      ) {
        setPlayerOneScore(playerOneScore + 1);
        setPlayerTurn(true);
        setGameFinished(true);
        setWinner(true);
        console.log("Player One WinsO");
        return;
      }
    }
    for (let i = 0; i < 8; i++) {
      if(
        playerTwoPiece === "O" &&
        squares[winCombination[i][0]] === "O" &&
        squares[winCombination[i][1]] === "O" &&
        squares[winCombination[i][2]] === "O"
      ) {
        setPlayerTwoScore(playerTwoScore + 1);
        setGameFinished(true);
        setPlayerTurn(false);
        setWinner(false);
        console.log("Player Two WinsO");
        return;
      }
    }
    if (!squares.includes(null)) {
      setDraws(draws + 1);
      setGameDraw(true);
      setGameFinished(true);
      console.log("DRAW!");
    }
  }

  function renderSquare(i) {
    return (
      <div className="cell" onClick={() => selectSquare(i)}>
        {squares[i]}
      </div>
    )
  }
  
  return (
    <>
    <div id="statusOptionsBar">
      <div onClick={() => returnHome()}>Return</div>
      <div id="status">{status}</div>
      <div onClick={() => restart()}>Restart</div>
    </div>
    <div id="container2">
      <div id="board">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
      <Scoreboard
      playerOneScore={playerOneScore}
      draws={draws}
      playerTwoScore={playerTwoScore}
      />
      {gameFinished && (
        <GameStatus
        restart={restart}
        winner={winner}
        gameDraw={gameDraw}
        clearHistory={clearHistory}
        />
      )}
    </>
  );
} 

Board.propTypes = {
  homePage: PropTypes.func.isRequired,
  restart: PropTypes.func.isRequired
}

export default Board;
