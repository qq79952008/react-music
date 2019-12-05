import React, { PureComponent, Fragment } from 'react'
import Header from '@/components/Header/Header'
import Main from '@/components/Main/Main'
import Player from '@/components/Player/Player'
import Sider from '@/components/Sider/Sider'
import Container from '@/components/Container/Container'
import style from './BasicLayout.scss'
export default class BasicLayout extends PureComponent {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className={style.layout}>
        <Header/>
        <Main>
          <Sider/>
          <Container></Container>
        </Main>
        <Player/>
      </div>
    )
  }
}