import React, { Component } from 'react'
import {observer} from 'mobx-react'

@observer
export default class ValidationErrors extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    var {store, id} = this.props
    if (store.ids_errors[id] === undefined) {
      conole.log('val undefiend', id)
      return null
    }
    var errors = store.ids_errors[id].errors
    var c = store.ids_errors[id].errors.length
    var arr = []
    for (var i = 0; i < c; i++) {
      arr[i] = (<div className='validation-error'>
        <span className='validation-error-exclaim flex-center'>
          <div>{i}</div>
        </span>
        <span>{errors[i]}</span>
      </div>)
    }
    return (<div className='validation-errors'>
      {errors}
    </div>)
  }

}
