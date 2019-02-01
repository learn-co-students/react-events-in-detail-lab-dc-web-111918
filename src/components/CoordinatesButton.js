import React from 'react';

export default class CoordinatesButton extends React.Component {

  mouseCoordinates = (e) => {
    // console.log(this.props)
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return <button type="button" onClick={this.mouseCoordinates}>Coordinates Button</button>
  }
}
