import React, { Component } from 'react'
import ArrayInputs from './ArrayInputs'
import FormBuilder from './FormBuilder'

class FormSubSection extends ArrayInputs {
  constructor(props, context) {
    super(props)
  }

  render() {
    const {data} = this.props
    // Similar to formSection
    var arr = data.inputs.map((o,i)=>{
      return <FormBuilder data={o} key={i}/>
    })
    return (<div className='FormSubSection'>
      <h3 className='headingSub'>{data.heading}</h3>
      {arr}
    </div>)
  }

}

export default FormSubSection
