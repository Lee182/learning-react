import { computed, observable, autorun } from 'mobx'
import form from '../shared/form.json'
import copyObject from '../shared/copyObject.js'
import request from '../client/lib/request.js'

export class FormStore {
  @observable raw = form
  // react builds elements from form
  @observable form = form.form

  // form_ids_abstract includes any keys with phones.$ or jobs.$.employer
  // $ signifies array abstraction
  @observable ids_abstract = form.ids

  // form_ids is build from the form object
  // react binds inputs to the id key
  @observable ids = {}

  @observable ids_arr = form.ids_arr
  @observable sections_arr = form.sections_arr
  // form_errors computed from form_ids will
  // run indivual change validation
  // react shows error messages from form_errors
  @computed get form_errors() {
    this.form_ids
    // watches form_ids and performs individual type validations
    return 2
    // return {'name': []}
  }
  @observable newform_submit_txt = 'Submit'
  constructor() {
    this.setIdsDefault()
  }

  setIdsDefault() {
    var self = this
    if (self._default) {
      self.ids = copyObject(self._default)
      return
    }
    Object.keys(form.ids).reduce((o, id)=>{
      if ( id.match(/\$/) === null ) {
        self.ids[id] = ''
      }
      return o
    }, {})
    self._setIdsArr(form.ids_arr, self.addIdArr)
    self._setIdsArr(form.sections_arr, self.addSectionArr)
    self._default = copyObject(this.ids)
  }
  _setIdsArr(ids, fn) {
    var self = this
    Object.keys(ids).forEach((id_abstract)=>{
      var n = ids[id_abstract].array.n
      for (var i = 0; i < n; i++) {
        fn.call(self, id_abstract)
      }
    })
  }

  getInputArr() {

  }
  // used when react builds elements
  // looks at inputs_arr 'phones.$'
  // resolves a number eg 0
  // set form_ids['phones.0']: ''
  // react input are bound to these ids
  addIdArr(id_abstract) {
    // TODO addToSet and other array.op
    var a = this.ids_arr[id_abstract].array

    var id = id_abstract.split('$').join(a.count)
    this.ids[id] = ''

    this.ids_arr[id_abstract].array.count++
  }
  removeIdAbstract(id_abstract, i) {
    var a = id_abstract.split('$')
    var j = i + 1
    var id0 = a.join(i)
    var id1 = a.join(j)
    if (this.ids[id0] === undefined) {return}

    while(this.ids[id1] !== undefined){
      this.ids[id0] = this.ids[id1]
      id0 = a.join(i++)
      id1 = a.join(j++)
    }
    delete this.ids[a.join(j)]
    if (this.ids_arr[id_abstract])
    this.ids_arr[id_abstract].array.count--
  }

  // used when react builds duplicate sections
  // looks at section_arr
  // resolve number eg 0
  // set form_ids[jobs.0.employer]: ''
  // set form_ids[jobs.0.summary]: ''
  // set form_ids[jobs.0.date_start]: ''
  // ...
  // recat inputs are bound to these ids
  addSectionArr(section_id) {
    // TODO addToSet and other array.op
    var self = this
    var section = this.sections_arr[section_id]
    var a = section.array
    Object.keys(section.ids).forEach((id)=>{
      id = id.split('$').join(a.count)
      self.ids[id] = ''
    })
    this.sections_arr[section_id].array.count++
  }
  removeSectionArr(section_id, i) {
    var self = this
    var section = this.sections_arr[section_id]
    var key_is_undefined = false
    Object.keys(section.ids).forEach((id)=>{
      self.removeIdAbstract(id, i)
    })
    this.sections_arr[section_id].array.count--
  }

  validateForm(){
    // send the form to server for validation
  }
  reqNewForm() {
    var self = this
    self.newform_submit_txt = 'Sending...'
    var p = request({
      url: '/new_form',
      method: 'post',
      data: {form: this.ids},
      json: true
    })
    .then(self.resFormGood.bind(this), self.resFormBad.bind(this))
    return p
  }
  resFormGood(res) {
    console.log('resFormGood',res)
    this.newform_submit_txt = 'Sent'
    alert('form successfully sent')
    // TODO redirect to new page
    this.setIdsDefault()
    return res
  }
  resFormBad(res) {
    alert('form unsuccessfully sent')
    console.log('resFormBad',res)
  }
}

var store = window.store = new FormStore
export default store

autorun(()=>{
  console.log('autorun.store', FormStore)
  console.log('autorun.args', arguments)
})
