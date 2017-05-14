import React, { Component } from 'react'
import FormInput from './FormInput'
import FormInputArr from './FormInputArr'
import FormSubSection from './FormSubSection'
import {observer} from 'mobx-react'

@observer
export default class FormBuilder extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    var data = this.props.data
    if (data.heading) {
      return <FormSubSection data={data}/>
    }
    if (data.array && data.heading === undefined) {
      return <FormInputArr data={data}/>
    }
    return <FormInput data={data}/>
  }

}
