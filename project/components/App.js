import React, { Component } from 'react'
import form_schema from '../shared/form.json'
import FormSections from './FormSections'

// TODO require form via flux store
class App extends Component {
  constructor(props, context) {
    super(props)
    this.state = {
      form_schema: form_schema
    }
  }

  render() {
    return (<div>
      <h1>Personal Details Form</h1>
      <FormSections form_schema={this.state.form_schema}/>
    </div>)
  }

}

export default App
