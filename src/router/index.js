import React, {Fragment} from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import BasicLayout from '@/layout/BasicLayout'
import Home from '@/pages/Home'
import Counter from '@/pages/Counter'

const Router = () => (
  <Fragment>
    <BasicLayout/>
  </Fragment>
)

export default Router