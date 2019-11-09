import React, { PureComponent, Fragment } from 'react'
import style from './Page.less'
import Loading from '@/components/Loading/Loading'

export default class Page extends PureComponent {

  constructor(props){
    super(props)
  }

  render(){
    const { loading } = this.props
    return (
      <div className={style.page}>
        {loading? <Loading/> : this.props.children}
      </div>
    )
  }
}