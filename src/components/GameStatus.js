import React from "react";

function GameStatus({clearHistory, restart, winner, gameDraw}) {
  return (
    <>
    <div className="end-game-screen">
      {!gameDraw && <span className="win-text">{winner ? "Player One Wins!" : "Player Two Wins!"}</span>}
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