import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = e => {
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    }, this.props.delay)
  }

  render() {
    return <button type="button" onClick={this.handleClick}>Delayed Button</button>
  }
}
