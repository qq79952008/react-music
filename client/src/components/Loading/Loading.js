import React, { PureComponent } from 'react'
import style from './Loading.scss'
export default class Loading extends PureComponent {

  render(){
    return (
      <div className={style.loading}>
        <div className={style.loadingBox}>
          <span className={`${style.loadingIcon} icon-refresh`}></span>
          <span className={style.loadingText}>Loading</span>
        </div>
      </div>
    )
  }
}