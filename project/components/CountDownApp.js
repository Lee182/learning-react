import React, { Component } from 'react'
import CountDown from './CountDown'

export default class CountDownApp extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      countdown_date: new Date('2017-05-20')
    }
  }

  render() {
    return <div>
      <h1>Count Down to
        <span className='CountDownDate'> {this.state.countdown_date.toLocaleFormat()}</span>
      </h1>
      <CountDown date={this.state.countdown_date}></CountDown>
      <p>This is an awsome a hot (module reloading) React app now! thankyou Kurt Weiberth to help get me started</p>
    </div>
  }

}
