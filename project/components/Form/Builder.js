import React, { Component } from 'react'
import FormSection from './FormSection'
import FormInput from './FormInput'
import FormInputArr from './FormInputArr'
import {observer} from 'mobx-react'

@observer
export default class FormBuilder extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    var {store, form, depth} = this.props
    if (form.heading) {
      return <FormSection store={store} form={form} depth={depth}/>
    }
    if (form.array && form.heading === undefined) {
      return <FormInputArr store={store} form={form}/>
    }
    if (form.hidden === true){
      return null
    }
    return <FormInput store={store} form={form}/>
  }

}
