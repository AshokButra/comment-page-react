import './index.css'

const CommentItem = props => {
  const {objectDetails, bgList, onDeleteObject, onLikeComment} = props
  const {
    id,
    userInputValue,
    textAreaInputValue,
    randIndex,
    isLiked,
  } = objectDetails

  const randColor = bgList[randIndex]

  const firstLetter = userInputValue[0]

  const onDeleteComment = () => {
    onDeleteObject(id)
  }

  const onChangeLike = () => {
    onLikeComment(id)
  }

  return (
    <li className="list-item">
      <div className="comment-item">
        <div>
          <p className={randColor}>{firstLetter}</p>
        </div>
        <div className="main-description-container">
          <p className="user-input-main">
            {userInputValue}
            <span className="time-sense">less than a minute ago</span>
          </p>
          <p className="user-input-description">{textAreaInputValue}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          {isLiked ? (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                className="like-icon"
                alt="like"
                onClick={onChangeLike}
              />
              <button className="liked-text" onClick={onChangeLike}>
                Like
              </button>
            </>
          ) : (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                className="like-icon"
                alt="like"
                onClick={onChangeLike}
              />
              <button className="like-text" onClick={onChangeLike}>
                Like
              </button>
            </>
          )}
        </div>
        <button className="delete-button" type="button" data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
