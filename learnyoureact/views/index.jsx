import React from 'react';

class TodoBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: this.props.data
    }
  }
  addTodo(todo){
    let a = [].concat(this.state.data)
    a.push(todo)
    this.setState({
      data: a
    })
  }
  render() {
    return (<div className="todoBox">
      <h1>Todos</h1>
      <TodoList data={this.state.data}/>
      <TodoForm data={this.state.data} addTodo={this.addTodo.bind(this)}/>
    </div>)
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    var todos = this.props.data.map((o) => {
      return <Todo title={o.title} key={o.title}>{o.detail}</Todo>
    })
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            {todos}
          </tbody>
        </table>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      style: style.todo__not_checked
    }
  }

  handleChange(e) {
    var styleName = 'todo__' + (!this.state.checked ? 'checked': 'not_checked')
    this.setState({
      checked: !this.state.checked,
      style: style[styleName]
    })
  }
  render() {
    // console.log(this.props)
    return (<tr style={this.state.style}>
      <td style={style.tableContent}>
        <input type="checkbox" checked={this.state.checked} onChange={this.handleChange.bind(this)}/>
      </td>
      <td style={style.tableContent}>{this.props.title}</td>
      <td style={style.tableContent}>{this.props.children}</td>
    </tr>)
  }
}

// throws server warning
Todo.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
}

class TodoForm extends React.Component {
  constructor(props){
    super(props)
    // changing the data state
    this.state = {
      title: '',
      detail: '',
    }
  }
  changeTitle(e) {
    this.setState({title: e.target.value})
  }
  changeDetail(e){
    this.setState({detail: e.target.value})
  }
  handleAdd(e) {
    this.props.addTodo(this.state)
  }
  render() {
    return (<div>
      Title: <input type="text"
        value={this.state.title}
        onChange={this.changeTitle.bind(this)} />
      <br/>
      Detail: <input type="text"
        value={this.state.detail}
        onChange={this.changeDetail.bind(this)} />
      <button onClick={this.handleAdd.bind(this)}>Add</button>
    </div>)
  }
}

let style = {
  tableContent: {
    border: "1px solid black"
  },
  todo__checked: {
    textDecoration: 'line-through'
  },
  todo__not_checked: {
    textDecoration: 'none'
  }
}
export default TodoBox
