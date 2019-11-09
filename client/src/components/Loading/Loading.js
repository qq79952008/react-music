import React, { PureComponent } from 'react'
import style from './Loading.less'
export default class Loading extends PureComponent {

  render(){
    return (
      <div className={style.loading}>
        <div className={style.loadingBox}>
          <span className={`${style.loadiungIcon} icon-refresh`}></span>
          <span className={style.loadiungText}>Loading</span>
        </div>
      </div>
    )
  }
}