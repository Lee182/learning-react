import React, { Component } from 'react'
import FormSection from './FormSection'
import {observer} from 'mobx-react'

@observer
class FormSections extends Component {
  constructor(props, context) {
    super(props)
  }

  render() {
    var {store, form} = this.props
    var formSections = form.map((o)=>{
      // o.section_id
      return <FormSection store={store} form={o} key={o.heading}/>
    })
    return (<form className='f-sections'>
      {formSections}
      <button className='f-submit'>Submit</button>
    </form>)
  }

}

export default FormSections
