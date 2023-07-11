import React, { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        Clicked <h3 style={{display:'inline'}}>{this.props.evenCount}</h3> times
      </div>
    )
  }
}
