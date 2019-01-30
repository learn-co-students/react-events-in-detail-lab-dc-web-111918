// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component{
    handleDelayed = (e) => {
        debugger
        e.persist();
        setTimeout(()=> {
            this.props.onDelayedClick(e)
        }, this.props.delay) 
    }
    render(){
        return (
            <button onClick={this.handleDelayed}>CLICK</button>
        )
    }
}

export default DelayedButton;