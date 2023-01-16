/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, logs: [], isPass: true}

  pushEmojiId = id => {
    const {logs, score, topScore} = this.state
    const isPresent = logs.includes(id)
    if (isPresent === true) {
      const updatedScore = topScore > score ? topScore : score
      this.setState({topScore: updatedScore, isPass: false})
    } else {
      const updatedLogs = [...logs, id]
      const updatedScore = score + 1
      const updatedTopScore = Math.max(updatedScore, topScore)
      if (updatedScore === 12) {
        this.setState({
          score: updatedScore,
          topScore: updatedTopScore,
          logs: [updatedLogs],
          isPass: false,
        })
      } else {
        this.setState({
          score: updatedScore,
          topScore: updatedTopScore,
          logs: updatedLogs,
          isPass: true,
        })
      }
    }
  }

  restartGame = () => {
    this.setState(prevState => ({
      score: 0,
      topScore: prevState.topScore,
      logs: [],
      isPass: true,
    }))
  }

  render() {
    const {emojisList} = this.props
    const shuffledEmojisList = emojisList.sort(() => Math.random() - 0.5)
    const {score, topScore, isPass} = this.state
    const whatToPrint = () => {
      let output
      if (isPass === true) {
        output = (
          <ul className="emojis-list-container">
            {shuffledEmojisList.map(each => (
              <EmojiCard
                eachEmoji={each}
                pushEmojiId={this.pushEmojiId}
                key={each.id}
              />
            ))}
          </ul>
        )
      } else {
        output = <WinOrLoseCard score={score} restartGame={this.restartGame} />
      }
      return output
    }
    console.log(score, isPass)
    return (
      <div className="app-container">
        <NavBar isPass={isPass} score={score} topScore={topScore} />
        {whatToPrint()}
      </div>
    )
  }
}

export default EmojiGame
