import React, { PureComponent } from 'react'
import style from './Container.less'
import Page from '@/components/Page/Page'

export default class Container extends PureComponent {
  render(){
    return(
      <Page loading={true}>
        <div className={style.container}>

        </div>
      </Page>
    )
  }
}