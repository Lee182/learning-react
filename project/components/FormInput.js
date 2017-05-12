import React, { Component } from 'react'

export default class FormInput extends Component {
  constructor(props, context) {
    super(props)
  }
  handleCross(e) {
    console.log('TODO remove FormInput')
    e.preventDefault()
  }
  handleInput(e) {
    e.target.value
  }
  handleKeypress(e) {
    if (e.keyCode === 13) { // and condition is array
      console.log('TODO add another input after enter keydown')
    }
  }
  render() {
    var {remove} = this.props
    var {label, placeholder, id, inputType, hidden} = this.props.data
    // default placeholder
    if (placeholder === undefined) {placeholder = label}

    var labelEl = (label) ?
      <label for={id} className='label'>{label}:</label> : null
    var crossEl = (remove)? <button onClick={this.handleCross.bind(this)}>X</button>: null
    var inputClass = (remove) ? 'input input-remove': 'input'


    var inputEl = (inputType === 'textarea') ?
    <textarea id={id} placeholder={placeholder} className={inputClass} onChange={this.handleInput.bind(this)} onKeyDown={this.handleKeypress.bind(this)}/>:
    <input id={id} placeholder={placeholder} className={inputClass}
    onChange={this.handleInput.bind(this)} onKeyDown={this.handleKeypress.bind(this)}/>

    if (hidden) {return null}

    // TODO element for error handling.
    return (<div className='formInput' id={'f-'+id}>
      {labelEl}
      {inputEl}
      {crossEl}
    </div>)
  }

}
