import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from '@/pages/Home'
import Counter from '@/pages/Counter'

const Router = () => (
  <div>
    <header style={{display: 'flex'}}>
      <Link to="/">Home</Link>
      <Link to="/counter" style={{marginLeft: '20px'}}>Counter</Link>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/counter" exact component={Counter}/>
        <Route/>
      </Switch>
    </main>
  </div>
)

export default Router