// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    selectedUser: 0,
  }

  previousUser = () => {
    const {selectedUser} = this.state

    if (selectedUser > 0) {
      this.setState(prevState => ({selectedUser: prevState.selectedUser - 1}))
    }
  }

  nextUser = () => {
    const {reviewsList} = this.props
    const {selectedUser} = this.state

    if (selectedUser < reviewsList.length - 1) {
      this.setState(prevState => ({selectedUser: prevState.selectedUser + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {selectedUser} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[
      selectedUser
    ]

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Reviews</h1>
          <img src={imgUrl} alt={username} className="profile-image" />
          <div className="arrow-container">
            <button
              type="button"
              data-testid="leftArrow"
              className="button"
              onClick={this.previousUser}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="user-name">{username}</p>
            <button
              data-testid="rightArrow"
              type="button"
              className="button"
              onClick={this.nextUser}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{companyName}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
