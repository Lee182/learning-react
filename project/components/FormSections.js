import React, { Component } from 'react'
import FormSection from './FormSection'
import FormSectionArr from './FormSectionArr'

class FormSections extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    var formSections = this.props.form_schema
    .map((o)=>{
      if (o.heading && o.array) {
        return <FormSectionArr data={o} key={o.heading}/>
      }
      return <FormSection data={o} key={o.heading}/>
    })
    return (<form className='formSections'>
      {formSections}
    </form>)
  }

}

export default FormSections
