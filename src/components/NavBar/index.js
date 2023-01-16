// Write your code here.
import './index.css'

const NavBar = props => {
  const {isPass, score, topScore} = props
  const scoreOutput = () => {
    let scoreOP = <></>
    if (isPass === true) {
      scoreOP = (
        <div className="navbar-score">
          <p className="scores">Score: {score} </p>
          <p className="scores">Top Score: {topScore} </p>
        </div>
      )
    }
    return scoreOP
  }
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
        </div>
        <h1 className="logo-title">Emoji Game</h1>
      </div>
      {scoreOutput()}
    </div>
  )
}

export default NavBar
