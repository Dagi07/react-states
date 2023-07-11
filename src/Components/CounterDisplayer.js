import React, { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <h1>
        {this.props.counts}
      </h1>
    )
  }
}
