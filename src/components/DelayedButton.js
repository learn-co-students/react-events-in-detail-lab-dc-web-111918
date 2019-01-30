// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {

  handleOnClick = (e) => {
    //this.props.onDelayedClick
    e.persist();
    setTimeout(() => {this.props.onDelayedClick(e)}, this.props.delay)

  }



  render() {
    return <div>
            <button onClick={this.handleOnClick}>Delayed Button</button>
          </div>

  }


}
