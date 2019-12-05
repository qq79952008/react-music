import React, { PureComponent } from 'react'
import style from './Container.scss'
import Page from '@/components/Page/Page'
import {Button} from 'antd'
export default class Container extends PureComponent {
  render(){
    return(
      <Page loading={false}>
        <div className={style.container}>
          <Button>123</Button>
        </div>
      </Page>
    )
  }
}