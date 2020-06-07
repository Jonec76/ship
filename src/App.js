import React, { Component } from 'react'
import Section1 from './components/Section1'
import './App.css'

export class App extends Component {

  constructor(){
    super()
    this.barColor = ['#2B5757', '#CCB798', '#ED2C36']
    console.log(window.innerWidth, window.innerHeight);
  }


  render() {
    let bar_children = this.barColor.map((element) => {
      return (
        React.createElement('div', {style:{backgroundColor:element}})
      )
    })
    let bar = React.createElement('div', {className:"bar"}, bar_children)
    
    return (
      <div className="App" >
          {bar}
          <Section1></Section1>
      </div>
    );
  }
}

export default App
