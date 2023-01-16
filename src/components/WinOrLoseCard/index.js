// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, restartGame} = props
  const onClickPlayAgain = () => {
    restartGame()
  }
  let creditCard = <></>
  if (score === 12) {
    creditCard = (
      <div className="win-or-lose-card">
        <div className="details-section">
          <h1 className="game-status">You Won</h1>
          <p className="current-score-label">Best Score</p>
          <p className="current-score-value">{score}/12</p>
          <button
            type="button"
            onClick={onClickPlayAgain}
            className="play-again-button"
          >
            Play Again
          </button>
        </div>
        <div className="image-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
            alt="win or lose"
            className="win-or-lose-image"
          />
        </div>
      </div>
    )
  } else {
    creditCard = (
      <div className="win-or-lose-card">
        <div className="details-section">
          <h1 className="game-status">You Lose</h1>
          <p className="current-score-label">Score</p>
          <p className="current-score-value">{score}/12</p>
          <button
            type="button"
            onClick={onClickPlayAgain}
            className="play-again-button"
          >
            Play Again
          </button>
        </div>
        <div className="image-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
            alt="win or lose"
            className="win-or-lose-image"
          />
        </div>
      </div>
    )
  }
  return creditCard
}

export default WinOrLoseCard
