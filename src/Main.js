import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'


export default function Main({ app }) {
  
  return (
    <Router>
      <Switch>
        
        <Route path='/' exact render={ () => (
          <Header app={app} />
        )}/>
      
      </Switch>
    </Router>
  )
}
