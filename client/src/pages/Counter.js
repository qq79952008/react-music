import React, { PureComponent } from 'react'
import style from './Counter.less'
import { Button } from 'antd'
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
    return(
      <div className={style.counter}>
        <div className="show">{this.state.count}</div>
        <div className="btns" style={{display: 'flex'}}>
          <Button style={{marginRight: '30px'}} onClick={this.increase.bind(this,1)}>+</Button>
          <Button onClick={this.decrease.bind(this,1)}>-</Button>
        </div>
      </div>
    )
  }
}