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
      <div className='f-submit flex-center'>
        <button className='btn-submit'>Submit</button>
      </div>
    </form>)
  }

}

export default FormSections
