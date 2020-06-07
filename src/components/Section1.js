import React, { Component } from 'react'
import './Section1.css'

const direction = require('../images/direction.png')
const cruise = require('../images/cruise.png')

export class Section1 extends Component {
    state = {
        directionTop: -30,
        cruiseLeft: -30
      }
    
    listenScrollEvent = e => {
        let y = window.scrollY;
        this.setState({directionTop: -30+2*y})
        this.setState({cruiseLeft: -30+1.5*y})
    }

    constructor(props){
        super(props)
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    
    render() {
        return (
            React.createElement('div', {className:'content'},
                React.createElement('img', {style:{top:this.state.directionTop, height:window.innerHeight}, className:'direction', src:direction}),
                React.createElement('img', {style:{left:this.state.cruiseLeft, width:window.innerWidth*0.9}, className:'cruise', src:cruise}),
            )
        )
    }
}

export default Section1

