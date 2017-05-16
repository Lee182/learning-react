import React, { Component } from 'react'
import {observer} from 'mobx-react'
import ValidationErrors from './ValidationErrors'

@observer
export default class FormInput extends Component {
  constructor(props){
    super(props)
    // var a = this.props.store.ids[this.props.form.id]
    // this.state = {value: a}
    // have to use this.state given that was error with not rendering.
  }
  handleCross(e) {
    e.preventDefault()
    var {store, i, id_abstract} = this.props
    store.removeIdAbstract(id_abstract, i)
  }
  changeInput(txt) {
    this.props.store.ids[this.props.form.id] = txt
    this.setState({value: this.props.store.ids[this.props.form.id]})
  }
  handleInput(e) {
    this.changeInput(e.target.value)
  }

  render() {
    var {store, form, remove} = this.props
    var {label, placeholder, id, tag, hidden, input_type} = form
    // default placeholder
    if (placeholder === undefined) {placeholder = label}
    if (input_type === undefined) {input_type = 'text'}

    var $label = (label) ?
      <label htmlFor={id} className='label'>{label}:</label> : null
    var $cross = (remove) ?
      <button className='btn-x' onClick={this.handleCross.bind(this)}>x</button>: null
    var iclass = (remove) ? 'input input-remove': 'input'


    var $input = null
    if (tag === 'textarea') {
      $input = <textarea id={id} placeholder={placeholder} className={iclass} onChange={this.handleInput.bind(this)}
      value={store.ids[id]} type={input_type}/>
    } else {
       $input = <input id={id} placeholder={placeholder} className={iclass} onChange={this.handleInput.bind(this)} value={store.ids[id]} type={input_type}/>
    }
    if (hidden) {return null}

    var $errmsg = <ValidationErrors store={store} id={id}/>

    if (store)
    // TODO element for error handling.
    return (<div className='f-input' id={'f-'+id}>
      {$label}
      {$input}
      {$cross}
      {$errmsg}
    </div>)
  }

}
