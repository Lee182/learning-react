import React from 'react';

class TodoBox extends React.Component {
  render() {
    return (<div className="todoBox">
      <h1>Todos</h1>
      <TodoList/>
      <TodoForm/>
    </div>)
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        <table style={{border: "2px solid black"}}>
          <tbody>
            <Todo title="Shopping">Milk</Todo>
            <Todo title="Hair cut">13:00</Todo>
            <Todo title="Learn React">15:00</Todo>
          </tbody>
        </table>
      </div>
    )
  }
}

class Todo extends React.Component {
  render() {
    // console.log(this.props)
    var a = {"border": "1px solid black"}
    return (<tr>
      <td style={a}>{this.props.title}</td>
      <td style={a}>{this.props.children}</td>
    </tr>)
  }
}

Todo.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.string.isRequired
}

class TodoForm extends React.Component {
  render() {
    return (<div className="todoForm">I am a TodoForm.</div>)
  }
}

export default TodoBox
