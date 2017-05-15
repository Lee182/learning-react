import React, { Component } from 'react'
import FormSection from './FormSection'
import {observer} from 'mobx-react'

@observer
export default class FormSections extends Component {
  constructor(props, context) {
    super(props)
  }
  handleSubmit(e) {
    e.preventDefault()
    store.reqNewForm()
  }
  render() {
    var {store, form} = this.props
    var btntxt = store.newform_submit_txt
    console.log(btntxt)
    var formSections = form.map((o)=>{
      // o.section_id
      return <FormSection store={store} form={o} key={o.heading}/>
    })
    return (<form className='f-sections'>
      {formSections}
      <div className='f-submit flex-center'>
        <button className='btn-submit' onClick={this.handleSubmit.bind(this)}>{btntxt}</button>
      </div>
    </form>)
  }

}
