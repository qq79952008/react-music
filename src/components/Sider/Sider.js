import React, { PureComponent } from 'react'
import style from './Sider.scss'

export default class Sider extends PureComponent {
  constructor(){
    super()
    this.state = {
      menuList: [
        {
          icon: 'icon-user',
          text: '未登录',
          type: ''
        },
        {
          icon: 'icon-music-circle',
          text: '发现音乐',
          type: ''
        },
        {
          icon: 'icon-music-list',
          text: '推荐歌单',
          type: ''
        },
        {
          icon: 'icon-music',
          text: '最新音乐',
          type: ''
        },
        {
          icon: 'icon-play-box-outline',
          text: '最新MV',
          type: ''
        },
      ]
    }
  }
  render(){
    return (
      <div className={style.sider}>
        <div className={style.menuList}>
          {this.state.menuList.map((item, index) => (
            <div key={index} className={style.menuItem}>
              <span className={`${item.icon} ${style.icon}`}></span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
