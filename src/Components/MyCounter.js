import React, { Component } from 'react'
import CounterDisplayer from './CounterDisplayer';
import EvenCounterDisplayer from './EvenCounterDisplayer';

export default class MyCounter extends Component {
  constructor() {
    super();

    this.state = {
      click_counts: 0,
      updated_state: 0
    }
  }

  allClicksCounter = () => {
    this.setState((myState) => {
      return {
        click_counts: myState.click_counts + 1
      }
    })
    this.evenClicksCounter();
  }

  evenClicksCounter = () => {
    console.log(this.state.click_counts)

    this.setState((myState) => {
      if (myState.click_counts % 2 === 0) {
        console.log("inside condition ->", this.state.click_counts)
        return {
          updated_state: myState.click_counts
        }
      }
    })

  }

  render() {
    return (
      <div>
        <button onClick={this.allClicksCounter}
        >
          Add one
        </button>
        <CounterDisplayer counts={this.state.click_counts} />
        <EvenCounterDisplayer evenCount={this.state.updated_state} />
      </div>
    )
  }
}
