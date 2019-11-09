import React, { PureComponent } from 'react'
import style from './Main.less'
export default class Main extends PureComponent {

  constructor(){
    super()
  }

  render(){
    return (
      <div className={style.main}>
        {this.props.children}
      </div>
    )
  }
}