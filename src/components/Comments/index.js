import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    userInput: '',
    textAreaInput: '',
    buttonClicked: false,
    commentItemList: [],
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeTextArea = event => {
    this.setState({textAreaInput: event.target.value})
  }

  onClickAddButton = () => {
    const {userInput, textAreaInput, commentItemList} = this.state
    const randomNum = Math.floor(
      Math.random() * initialContainerBackgroundClassNames.length,
    )
    const newObject = {
      id: uuidv4(),
      userInputValue: userInput,
      textAreaInputValue: textAreaInput,
      randIndex: randomNum,
      isLiked: false,
    }
    this.setState({
      userInput: '',
      textAreaInput: '',
      buttonClicked: true,
      commentItemList: [...commentItemList, newObject],
    })
  }

  onDeleteObject = id => {
    const {commentItemList} = this.state
    const filteredList = commentItemList.filter(
      eachObject => eachObject.id !== id,
    )
    this.setState({
      commentItemList: filteredList,
    })
  }

  onLikeComment = id => {
    const {commentItemList} = this.state
    const objectIndex = commentItemList.findIndex(
      eachItem => eachItem.id === id,
    )
    const object = commentItemList[objectIndex]
    const newObj = {
      id: object.id,
      userInputValue: object.userInputValue,
      textAreaInputValue: object.textAreaInputValue,
      randIndex: object.randIndex,
      isLiked: !object.isLiked,
    }
    commentItemList.splice(objectIndex, 1, newObj)
    this.setState({
      commentItemList,
    })
  }

  render() {
    const {
      userInput,
      textAreaInput,
      buttonClicked,
      commentItemList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <div className="left-right-section-container">
            <form className="left-section">
              <h1 className="main-heading">Comments</h1>
              <p className="paragraph">Say Something about 4.0 Technologies</p>
              <input
                placeholder="Your Name"
                className="user-input"
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
              <textarea
                placeholder="Your Comment"
                className="text-area-input"
                rows="8"
                cols="50"
                onChange={this.onChangeTextArea}
                value={textAreaInput}
              />
              <button
                type="button"
                className="add-comment-button"
                onClick={this.onClickAddButton}
              >
                Add Comment
              </button>
            </form>
            <div className="right-section">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
                className="comments-image"
                alt="comments"
              />
            </div>
          </div>
          <hr />
          <div className="result-container">
            <div className="comment-count">
              <p className="count">{commentItemList.length}</p>
              <p className="comments-text">Comments</p>
            </div>
          </div>
          {buttonClicked && (
            <ul className="list-container">
              {commentItemList.map(eachItem => (
                <CommentItem
                  objectDetails={eachItem}
                  bgList={initialContainerBackgroundClassNames}
                  onDeleteObject={this.onDeleteObject}
                  onLikeComment={this.onLikeComment}
                  key={eachItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Comments
