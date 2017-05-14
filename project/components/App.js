import React, { Component } from 'react'
import FormSections from './FormSections'
import {observer} from 'mobx-react'

@observer
class App extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    return (<div>
      <h1>Personal Details Form</h1>
      <FormSections form_schema={this.props.store.form}/>
    </div>)
  }

}

export default App
