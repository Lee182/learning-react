(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
