import React, { PureComponent } from 'react'
import style from './Search.scss'
export default class Search extends PureComponent {
  render(){
    return (
      <div className={style.search}>
        <div className={style.searchBox}>
          <input className={style.searchInput} type="text"/>
          <span className={`icon-search ${style.searchIcon}`}></span>
        </div>
        <div className={style.resultBox}>
      
        </div>
      </div>
    )
  }
  
}