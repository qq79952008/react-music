import React, { PureComponent } from 'react'
import style from './Header.scss'
// import Search from './Search'
import ToolBox from './ToolBox'
class Header extends PureComponent {
  
  render(){
    return (
      <div className={style.header}>
        <ToolBox/>
        {/* <Search/> */}
      </div>
    )
  }
}

export default Header