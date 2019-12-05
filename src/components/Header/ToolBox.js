import React, { PureComponent } from 'react'
import style from './ToolBox.scss'

export default class ToolBox extends PureComponent {

  constructor(){
    super()
    this.state = {
      btns: [
        {
          colorClass: 'red',
          icon: 'icon-home',
          text: '',
          fn: ''
        },
        {
          colorClass: 'yellow',
          icon: '',
          text: '-',
          fn: ''
        },
        {
          colorClass: 'green',
          icon: 'icon-arrow-expand',
          text: '',
          fn: ''
        },
      ],
      arrows: [
        {
          icon: 'icon-prev'
        },
        {
          icon: 'icon-next'
        }
      ]
    }
  }

  render(){
    return (
      <div className={style.toolbox}>
        <div className={style.btns}>
          {this.state.btns.map((item, index) => {
            return (
              <div className={`${style.item} ${style[item.colorClass]}`} key={index}>
                {item.icon? <span className={`${item.icon} ${style.icon}`}></span>: <span className="text">{item.text}</span>}
              </div>
            )
          })}
          
        </div>
        <div className={style.arrows}>
          {this.state.arrows.map((item,index) => {
            return (
              <div className={`${style.item} ${style[item.colorClass]}`} key={index}>
                <span className={item.icon}></span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}