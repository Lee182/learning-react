import React, { Component } from 'react'

let remainder = (n, denominator) => {
  var ans = n/denominator
  var count = Math.floor(ans)
  var remainder = ans - count
  return {
    answer: count,
    r: remainder*denominator
  }
}

class CountDown extends Component {
  constructor(props, context){
    super(props, context)
    this.state = this.timeRemaining()
    this.startCountDown()
  }
  startCountDown() {
    this.interval = setInterval(this.tick.bind(this), 1000)
  }
  clearCountDown() {
    this.interval = clearInterval(this.interval)
  }
  time2obj(n){
    let is_neg = n < 0
    if (is_neg) {n = -n}
    let tmp = remainder(n, 24*60*60*1000)
    let tmp0 = remainder(tmp.r, 60*60*1000)
    let tmp1 = remainder(tmp0.r, 60*1000)
    let tmp2 = remainder(tmp1.r, 1000)
    let o = {
      days: tmp.answer,
      hh: tmp0.answer,
      mm: tmp1.answer,
      ss: tmp2.answer,
      ms: tmp2.r
    }
    if (is_neg) {
      for (var prop in o) {
        o[prop] = -o[prop]
      }
    }
    return o
  }
  timeRemaining() {
    var time_range = this.props.date.getTime() - Date.now()
    return this.time2obj( time_range )
  }
  tick() {
    this.setState(
      this.timeRemaining()
    )
  }
  render() {
    var days = this.state.days > 0 ?
    <span className='CountDown-days'>{this.state.days}days </span> : null

    var hh = this.state.hh > 0 ?
    <span className='CountDown-hh'>{this.state.hh}h </span> : null

    var mm = this.state.mm > 0 ?
    <span className='CountDown-mm'>{this.state.mm}m </span> : null

    var ss =
    <span className='CountDown-ss'>{this.state.ss}s </span>

    return <div className='CountDown'>
      {days}
      {hh}
      {mm}
      {ss}
    </div>
  }

}

export default CountDown
