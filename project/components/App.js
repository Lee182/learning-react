import React, { Component } from 'react'
import {observer} from 'mobx-react'

import FormStore from '../components/Form/Store'
import TheForm from '../components/Form/Index'

@observer
export default class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {nav_open: true}
  }
  toggleNav(){
    this.setState({
      nav_open: !this.state.nav_open
    })
  }
  hideNav() {
    this.setState({
      nav_open: false
    })
  }

  render() {
    var navclass = 'nav'
    var stageclass = 'stage'
    if (this.state.nav_open === false) {
      navclass += ' hide'
    } else {
      stageclass += ' nav-open'
    }
    return (<div>
      <div className='nav-toggle flex-center' onClick={this.toggleNav.bind(this)}>
        <div>☰</div>
      </div>
      <nav className={navclass}>
        <a className='nav-item nav-title'>Service Title</a>
        <br/>
        <a className='nav-item'>
          <span className='nav-underline'>Service 1</span>
        </a>
        <a className='nav-item'>
          <span className='nav-underline'>Service 2</span>
        </a>
        <a className='nav-item'>
          <span className='nav-underline'>Service 3</span>
        </a>
        <a className='nav-item'>
          <span className='nav-underline'>Personal Details Form</span>
        </a>
        <a className='nav-item'>
          <span className='nav-underline'>Personal Detials Table</span>
        </a>
        <a className='flex-gap'></a>
        <a className='nav-item nav-footer'>About Service</a>
        <a className='nav-item nav-footer'>Terms and Conditions</a>
        <a className='nav-item nav-footer'>ⓒ copyleft
        </a>
      </nav>
      <div className={stageclass}>
        <TheForm store={FormStore} form={FormStore.form}/>
      </div>
    </div>)
  }

}
