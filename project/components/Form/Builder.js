import React, { Component } from 'react'
import Section from './Section'
import Input from './Input'
import InputArr from './InputArr'
import {observer} from 'mobx-react'

@observer
export default class Builder extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    var {store, form, depth} = this.props
    if (form.heading) {
      return <Section store={store} form={form} depth={depth}/>
    }
    if (form.array && form.heading === undefined) {
      return <InputArr store={store} form={form}/>
    }
    if (form.hidden === true){
      return null
    }
    return <Input store={store} form={form}/>
  }

}
