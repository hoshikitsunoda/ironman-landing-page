import React, { Component } from 'react'
import Navigation from './Navigation'

class Hero extends Component {
  state = { isDesktop: false }

  render() {
    console.log(this.props.characterData)
    return (
      <div>
        <Navigation />
        <div>Hero Section</div>
      </div>
    )
  }
}

export default Hero
