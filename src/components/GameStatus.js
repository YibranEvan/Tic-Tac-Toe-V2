import React from "react";

function GameStatus({clearHistory, restart, playerTurn, gameDraw}) {
  return (
    <>
    <div className="end-game-screen">
      {!gameDraw && <span className="win-text">{playerTurn ? "O Wins" : "X Wins"}</span>}
      {gameDraw && <span className="win-text">DRAW!</span>}
      <button className="btn" onClick={restart}>
        RESTART GAME
      </button>
      <button className="btn" onClick={clearHistory}>
        CLEAR HISTORY
      </button>
    </div>
    </>
  )
}

export default GameStatus;