import { computed, observable, autorun } from 'mobx'
import form from '../../shared/form.json'
import cp from '../../shared/copyObject.js'
import request from '../../client/lib/request.js'
import validation from '../../shared/validation/index.js'
window.validation = validation

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
  @observable ids_errors = {}

  @observable ids_arr = cp(form.ids_arr)
  @observable sections_arr = cp(form.sections_arr)

  @observable newform_submit_txt = 'Submit'
  constructor() {
    this.setIdsDefault()
  }

  reset() {
    var self = this
    self.ids_arr = cp(form.ids_arr)
    self.sections_arr = cp(form.sections_arr)
    self.setIdsDefault()
    self.newform_submit_txt = 'Submit'
  }
  setIdsDefault() {

    var self = this
    if (self._default) {
      self.ids = cp(self._default)
    } else {
    Object.keys(form.ids).reduce((o, id)=>{
      if ( id.match(/\$/) === null ) {
        self.ids[id] = ''
      }
      return o
    }, {})
    }
    self._setIdsArr(self.ids_arr, self.addIdArr)
    self._setIdsArr(self.sections_arr, self.addSectionArr)
    self._default = cp(self.ids)
    Object.keys(self.ids).forEach((name)=>{
      self.ids_errors[name] = {errors: []}
    })
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
    this.ids_errors[id] = {errors: []}
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
    delete this.ids_errors[a.join(j)]
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
      self.ids_errors[id] = {errors: []}
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
    // validation that nothing blank, with exception of optional
    // validaion of simpled varibles
  }
  formSubmit() {
    console.log("here formSubmit")
    this.ids_errors.name.errors[0] = 'shit'
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
    this.reset()
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
