import React from 'react'

export default class DelayedButton extends React.Component{
  delayMe=(e)=>{

   e.persist();
   setTimeout(() => {
     this.props.onDelayedClick(e);
   }, this.props.delay);
  }
render(props){
  // console.log(this.props.onDelayedClick)
  // console.log(this.props.delay)
  return(
    <div>
    <button onClick={this.delayMe}>Click me please!</button>
    </div>
  )
}
}
