import React, { Component } from 'react'
import Section from './Section'
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
    var sections = form.map((o)=>{
      // o.section_id
      return <Section store={store} form={o} key={o.heading}/>
    })
    return (<form className='f-sections'>
      <h1>Personal Details Form</h1>
      {sections}
      <div className='f-submit flex-center'>
        <button className='btn-submit' onClick={this.handleSubmit.bind(this)}>{btntxt}</button>
      </div>
    </form>)
  }

}
