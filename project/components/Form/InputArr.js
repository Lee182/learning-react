import React, { Component } from 'react'
import Input from './Input'
import {observer} from 'mobx-react'
import cp from '../../shared/copyObject.js'

@observer
export default class FormInputArr extends Component {
  constructor(props, context) {
    super(props)
  }
  handleAdd(e) {
    if (e) {
      e.preventDefault()
    }
    this.props.store.addIdArr(this.props.form.id)
  }
  render() {
    const {form, store} = this.props
    const input_count = store.ids_arr[form.id].array.count
    var inputs = []
    for (var i = 0; i < input_count; i++) {
      let form0 = cp(form)
      let remove = i > 0 || form.optional
      form0.id = form.id.split('$').join(i)

      inputs[i] = <Input store={store} form={form0} key={form0.id} id_abstract={form.id} i={i} remove={remove} />
    }

    var btn = <button className='btn-append' onClick={this.handleAdd.bind(this)}>{form.array.label}</button>

    return (<div>
      {inputs}
      {btn}
    </div>)
  }

}
