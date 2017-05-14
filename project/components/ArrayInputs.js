import React, { Component } from 'react'
import FormInput from './FormInput'
import {observer} from 'mobx-react'

@observer
class ArrayInputs extends Component {
  createItem(position, inputdata) {
    var o = Object.assign({}, inputdata)
    o.id = o.id.split('$').join(position)
    if (position > 0) {
      if (o.label && !o.placeholder) {
        o.placeholder = o.label
      }
      delete o.label
    }
    return o
  }

  createEl(position, inputdata) {
    var o = this.createItem(position, inputdata)
    if (position > 0 || inputdata.optional) {
      return <FormInput data={o} key={o.id} remove={true}/>
    }
    if (position === 0) {
      return <FormInput data={o} key={o.id}/>
    }
  }
}

export default ArrayInputs
