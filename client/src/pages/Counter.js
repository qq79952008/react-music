import React, { PureComponent } from 'react'
import style from './Counter.less'
export default class Counter extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  increase(num = 1){
    this.setState({
      count: this.state.count + num
    })
  }

  decrease(num = 1){
    this.setState({
      count: this.state.count - num
    })
  }


  render(){
    console.log('width', document.documentElement.clientWidth)
    return(
      <div className={style.counter}>
        <div className="show">{this.state.count}</div>
        <div className="btns" style={{display: 'flex'}}>
          <button style={{marginRight: '30px'}} onClick={this.increase.bind(this,1)}>+</button>
          <button onClick={this.decrease.bind(this,1)}>-</button>
        </div>
      </div>
    )
  }
}