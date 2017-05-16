# personal-details-form
## what it does
it takes a form.cson config, this is then parsed in the build process, and parsed again by react to create the html structure and necessary components.

the client will then send the form to the server where basic validation occurs and it is put in a db.

the client is alerted with the result of their form submit action.

in retrospective using form.cson caused me problems down the line given that instead of putting objects in array, i would use a key 0: {}, 1: {}, this inhibited development by not using the native array methods.


## my experience of react
with react you get the benefit of composing html elements, however at the loss of development time. i personally feel thats its better to separate concerns from designing html structure than state. in vuejs i find it much easier to add in the functionality and databinding than react. in my other project pugjs is used to compile a html structure for vuejs to then later render over.
