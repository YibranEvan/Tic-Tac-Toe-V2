import React from "react";
import PropTypes from 'prop-types'

const Scoreboard = ({playerOneScore, draws, playerTwoScore}) => {

  return(
    <>
      <div id="scoreboard">
        <div className="playerOneWins">Player One
          <div className="scoreNumber">{playerOneScore}</div>
        </div>
        <div className="gameTies">Draws
          <div className="draws">{draws}</div>
        </div>
        <div className="playerTwoWins">Player Two
          <div className="scoreNumber2">{playerTwoScore}</div>
        </div>
      </div>
    </>
  )
}

Scoreboard.propTypes = {
  playerOneScore: PropTypes.number.isRequired,
  draws: PropTypes.number.isRequired,
  playerTwoScore:PropTypes.number.isRequired,
}


export default Scoreboard;