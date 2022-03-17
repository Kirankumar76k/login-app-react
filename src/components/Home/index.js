// Write your code here
import {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {isLoggedIn: false}

  onClick = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logout={this.onClick} />
          ) : (
            <Login login={this.onClick} />
          )}
        </div>
      </div>
    )
  }
}

Home.defaultProps = {
  heading: 'Please Login',
  btnText: 'Login',
}

export default Home
