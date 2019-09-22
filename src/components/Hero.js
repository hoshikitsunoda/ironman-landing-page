import React, { Component } from 'react'

class Hero extends Component {
  state = { isDesktop: false }

  render() {
    console.log(this.props.characterData)
    return (
      <div>
        <div>Hero Section</div>
      </div>
    )
  }
}

export default Hero
