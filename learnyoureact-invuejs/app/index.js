let data = {
  todos: [
    {title: 'Shopping', detail: 'Milk', checked: false},
    {title: 'Hair cut', detail: '13:00', checked: false}
  ],
  addTodoForm: {
    title: '',
    detail: '',
  }
}
console.log(data)
let vm = new Vue({
  el: '#app',
  data: data,
  methods: {
    removeTodo: function(i){
      let vm = this
      vm.todos.splice(i, 1)
    },
    addTodo: function(){
      let vm = this
      var a = Object.assign({checked: false}, vm.addTodoForm)
      vm.addTodoForm.title = ''
      vm.addTodoForm.detail = ''
      vm.todos.push(a)
    }
  }
})
