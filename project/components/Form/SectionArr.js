import React, { Component } from 'react'
import Builder from './Builder'
import {observer} from 'mobx-react'
import cp from '../../shared/copyObject.js'

@observer
export default class FormSectionArr extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    // sections_arr lookup count
    // then map that to an array
    var a = store.sections_arr[form.section_id]
    var b = a.array.heading
    var c = a.array.count
    for (var i = 0; i < c; i++) {
      var form0 = cp(form)
      form0.array_parsed = true
      form0.heading = (b) ? b.split('$').join(i+1) : false

      arr[i] = <Builder store={store} form={form0} key={i} depth={depth1}/>
    }
    var h2 =
    return (<div id={form.section_id} className={fclass}>
      <h2 className={hclass}>{form.heading}</h2>
      {arr}
    </div>)

  }
}
