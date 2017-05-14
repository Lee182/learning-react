import { computed, observable, autorun } from 'mobx'
import form from '../shared/form.json'

export class FormStore {
  @observable raw = form
  // react builds elements from form
  @observable form = form.form

  // form_ids_abstract includes any keys with phones.$ or jobs.$.employer
  // $ signifies array abstraction
  @observable ids_abstract = form.ids

  // form_ids is build from the form object
  // react binds inputs to the id key
  @observable ids = Object.keys(form.ids).reduce(function(o, id){
    o[id.split('$').join('0')] = ''
    return o
  }, {})

  // form_errors computed from form_ids will
  // run indivual change validation
  // react shows error messages from form_errors
  @computed get form_errors() {
    this.form_ids
    // watches form_ids and performs individual type validations
    return 2
    // return {'name': []}
  }


  resetForm() {
    // form_store = form_store_default
  }

  // used when react builds elements
  // looks at inputs_arr 'phones.$'
  // resolves a number eg 0
  // set form_ids['phones.0']: ''
  // react input are bound to these ids
  setInputArr(id, op) {

  }

  // used when react builds duplicate sections
  // looks at section_arr
  // resolve number eg 0
  // set form_ids[jobs.0.employer]: ''
  // set form_ids[jobs.0.summary]: ''
  // set form_ids[jobs.0.date_start]: ''
  // ...
  // recat inputs are bound to these ids
  setSectionArr(id, op) {

  }
  validateForm(){
    // send the form to server for validation
  }
}

var store = window.store = new FormStore
export default store

autorun(()=>{
  console.log('autorun.store', store)
  console.log('autorun.args', arguments)
})
