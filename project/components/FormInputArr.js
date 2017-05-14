import React, { Component } from 'react'
import FormInput from './FormInput'
import ArrayInputs from './ArrayInputs'
import {observer} from 'mobx-react'

@observer
class FormInputArr extends ArrayInputs {
  constructor(props, context) {
    super(props)
    this.state = {inputs: [
      this.createEl(0, this.props.data)
    ]}
  }
  handleAdd(e) {
    if (e) {
      e.preventDefault()
    }
    var inputs = this.state.inputs
    var input = this.createEl(inputs.length, this.props.data)
    this.setState({
      inputs: inputs.concat([input])
    })
  }
  render() {
    var btn = <button onClick={this.handleAdd.bind(this)}>{this.props.data.array.label}</button>

    return (<div>
      {this.state.inputs}
      {btn}
    </div>)
  }

}

export default FormInputArr
