// Code CoordinatesButton Component Here
import React, {Component} from 'react'


class CoordinatesButton extends Component{
    handleChange = (e)=>{
        this.props.onReceiveCoordinates([e.clientX, e.clientY])

    }
    render(){
        return (
            <button onClick={this.handleChange}>Click ME</button>
        )
    }
}

export default CoordinatesButton;