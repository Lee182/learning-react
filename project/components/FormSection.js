import React, { Component } from 'react'
import FormBuilder from './FormBuilder'

class FormSection extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    // TODO handle data.array && data.heading
    var arr = this.props.data.inputs.map((o,i)=>{
      return <FormBuilder data={o} key={i}/>
    })
    return (<div className='formSection'>
      <h2 className='heading'>{this.props.data.heading}</h2>
      {arr}
    </div>)
  }

}

export default FormSection