// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmoji, pushEmojiId} = props
  const {id} = eachEmoji
  const logId = () => {
    pushEmojiId(id)
  }
  return (
    <li className="emoji-item" onClick={logId}>
      <button type="button" className="emoji-btn">
        <img
          src={eachEmoji.emojiUrl}
          alt={eachEmoji.emojiName}
          className="emoji-icon"
          value={eachEmoji.id}
        />
      </button>
    </li>
  )
}

export default EmojiCard
