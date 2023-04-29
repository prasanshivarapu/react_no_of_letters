// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {result: ''}

  getting = event => {
    this.setState({result: event.target.value})
  }

  render() {
    const {result} = this.state
    return (
      <div className="greet1">
        <div className="greet3">
          <h1 className="greet5">
            Calculate the letters <br />
            you enter
          </h1>
          <p>Enter the phrase </p>
          <input
            type="text"
            onChange={this.getting}
            className="greet2"
            placeholder="searchinput"
          />
          <div>
            <button type="button" className="greet4">
              no.of letters:{result.length}
            </button>
          </div>
        </div>
        <div>
          <img
            alt="avatar"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
