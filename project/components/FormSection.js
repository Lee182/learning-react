import React, { Component } from 'react'
import FormBuilder from './FormBuilder'
import {observer} from 'mobx-react'
import copyObject from '../shared/copyObject.js'

@observer
class FormSection extends Component {
  constructor(props, context) {
    super(props)
  }
  handleBtnAdd(e) {
    var {store, form} = this.props
    e.preventDefault()
    store.addSectionArr(form.section_id)
  }
  handleBtnCross(e) {
    var {store, form} = this.props
    e.preventDefault()
    console.log(store, form)
    store.removeSectionArr(form.section_id, form.heading_remove)
  }


  render() {
    var {store, form, depth} = this.props
    let depth1 = (depth !== undefined) ? (depth + 1) : 0

    var hclass = 'f-heading-'+depth1
    var fclass = 'f-section-'+depth1
    var arr = []
    if (!form.array || form.array_parsed) {
      arr = form.inputs.map((o,i)=>{
        return <FormBuilder store={store} form={o} key={i} depth={depth1} />
      })
    }

    var a
    var c1 = form.section_id && form.array && !form.array_parsed
    if (c1) {
      a = store.sections_arr[form.section_id]
      var b = a.array.heading
      var c = a.array.count
      for (var i = 0; i < c; i++) {
        var form0 = copyObject(form)
        form0.array_parsed = true
        form0.heading = (b) ? b.split('$').join(i+1) : false
        if (i >= a.array.n) {
          form0.heading_remove = i
        }
        form0.inputs = JSON.parse(
          JSON.stringify(form0.inputs).split('$').join(i) )
        form0.section_id2 = form0.section_id+'-'+i
        arr[i] = <FormBuilder store={store} form={form0} key={i} depth={depth1}/>
      }
    }

    var btn = (c1 === true) ?
    <button onClick={this.handleBtnAdd.bind(this)}>{a.array.label}</button>: null

    var h2
    if (form.heading === false) {
      h2 = null
    }
    else if (typeof form.heading === 'string' && form.heading_remove === undefined) {
      h2 = <h2 className={hclass}>{form.heading}</h2>
    } else {
      h2 = [
        <h2 className={hclass}>{form.heading}</h2>,
        <button onClick={this.handleBtnCross.bind(this)}>X</button>
      ]
    }
    var id = form.section_id2 || form.section_id
    return (<div id={id} className={fclass}>
      {h2}
      {arr}
      {btn}
    </div>)
  }

}

export default FormSection
