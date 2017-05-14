module.exports = function main(sections) {
  var ids = {}
  var ids_arr = {}
  var ids_optionals = {}
  var sections_id = {} // sections that require validation
  var sections_arr = {} // validation with multiple objects

  function separate_logic(o){
    if (o.section_id && o.validate) {
      sections_id[o.section_id] = o
    }
    if (o.section_id && o.array) {
      sections_arr[o.section_id] = o
    }
    if (o.id) {
      ids[o.id] = o.validate || ''
      if (o.array) {
        ids_arr[o.id] = o.array
      }
      if (o.optional) {
        ids_optionals[o.id] = o.validate || ''
      }
    }
    if (o.section_id && o.inputs) {
      o.inputs.forEach(separate_logic)
    }
  }
  sections.forEach(separate_logic)
  return {ids, ids_optionals, ids_arr, sections_id, sections_arr, form: sections}
}


// ids
// {id: 'phones.$', validate: 'phone'} ...

// ids_arr
// {
//   id: 'phones.$',
//   array:
//     op: 'addToSet'
//     label: 'Add Phone'
// } ...


/*
can be reduced to
sections_id
  address
    validate: osm
    args:
      address.housenumber
      address.street
      address.city
      address.country
      address.post_code
  job-history
    validate: dateGT_AB
    args:
      jobs.$.date_start
      jobs.$.date_end

sections_arr
  job-history:
    ids:
      job.$.title
      jobs.$.employer
      jobs.$.summary
      jobs.$.date_start
      jobs.$.date_end
  clinical-notes:
    clinical_notes.$.note
    clinical_notes.$.date

insert simple just validate then if valid insert else callback errors
update simple just validate then mongo.findOneAndReplace
db also adds date modifyied
*/
