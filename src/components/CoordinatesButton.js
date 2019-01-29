import React, {Component} from 'react'

class CoordinatesButton extends Component {
    handleClick = (e) => {
        const arr = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(arr)
    }

    render (){
        return (<button 
                    onClick={this.handleClick}    
                >Button</button>)
    }
}

export default CoordinatesButton