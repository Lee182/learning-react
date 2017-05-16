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
      <nav>
        <a>Service 1</a>
        <a>Service 2</a>
        <a>Service 3</a>
        <a>New Personal Details Form</a>
        <a>Aggregate Personal Detials</a>
      </nav>
      <FormSections store={FormStore} form={FormStore.form}/>
    </div>)
  }

}

export default App
