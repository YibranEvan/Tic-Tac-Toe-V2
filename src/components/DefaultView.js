import React from "react";
import { useState } from "react";
import Board from "./Board";


const DefaultView = () => {
  const [gameChoice, setGameChoice] = useState(false);
  const [selectingPiece, setSelectingPiece] = useState(false);
  const [playerOnePiece, setPlayerOnePiece] = useState("");
  const [playerTwoPiece, setPlayerTwoPiece] = useState("");


  const handleGameChoice = (gameMode) => {
    if (gameMode === "ONE") {
      alert("Coming soon in the near future!");
    } else if (gameMode === "TWO") {
      setGameChoice(true);
      setPlayerOnePiece("");
      setPlayerTwoPiece("");
    }
  };

  const handlePieceSelect = (piece) => {
    if (piece === "X") {
      setSelectingPiece(true);
      setPlayerOnePiece("X")
      setPlayerTwoPiece("O")
      console.log(playerOnePiece);
    } else if (piece === "O") {
      setSelectingPiece(true);
      setPlayerOnePiece("O");
      setPlayerTwoPiece("X")
      console.log(playerOnePiece)
    }
  }

  function homePage() {
    setGameChoice(false)
    setSelectingPiece(false)
  }

  if(gameChoice == true && selectingPiece == false) {
    return  <>
    <div id="container">
      <h1 className="title">Player One Choose Your Piece</h1>
        <div id="game-choice">
            <div className="one cell x" onClick={() => handlePieceSelect("X")}></div>
            <div className="two cell circle" onClick={() => handlePieceSelect("O")}></div>
        </div>
        <div className="backSelect" onClick={() => homePage()}>Back</div>
    </div>
    </>
  }
  else if (gameChoice == true && selectingPiece == true) {
    return <Board
    playerOnePiece={playerOnePiece}
    playerTwoPiece={playerTwoPiece}
    homePage={homePage}
    />
  }

  return (
    <>
      <div id="container">
        <h1 className="title">Tic Tac Toe</h1>
          <div id="game-choice">
              <div className="one" onClick={()=> handleGameChoice("ONE")}>One Player: Coming Soon!</div>
              <div className="two" onClick={() => handleGameChoice("TWO")}>Two Players</div>
          </div>
      </div>
    </>
  )
}







export default DefaultView;