import React from 'react'

export default class CoordinatesButton extends React.Component{
  createMouseCoords=(e)=>{
    let coordinates = []
    coordinates.push(e.clientX)
    coordinates.push(e.clientY)
    this.props.onReceiveCoordinates(coordinates)
  }
  render(props){
    return(
      <div>
      <button onClick={this.createMouseCoords}>Click me!</button></div>
    )
  }
}
