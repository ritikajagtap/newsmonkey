import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import React, { Component } from 'react'

export default class App extends Component {
  c= 'John'
  render() {
    return (<>
      <Navbar/ >
      <News pageSize={5}/>
      </>
    )
  }
}
