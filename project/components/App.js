import React, { Component } from 'react'
import FormSections from './FormSections'
import {observer} from 'mobx-react'
import FormStore from '../components/FormStore'

@observer
class App extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    return (<div>
      <h1>Personal Details Form</h1>
      <FormSections store={FormStore} form={FormStore.form}/>
    </div>)
  }

}

export default App
