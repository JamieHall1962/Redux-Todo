import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addTodo, toggleTodo } from './actions/';
import TodoList from './components/TodoList';
import './App.css';



class App extends Component {
 state = {
      newTodo: ''
    };
  

  addTodo = (e)=> {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({newTodo: ''});
  }

  handleChange = (e)=> {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.handleChange}
            value={this.state.newTodo}
            placeholder='Add a Todo'
            name="newTodo"
          />
        </form>
       {this.props.todos.map(todo => {
         return(<div onClick={() => this.props.toggleTodo(todo.id)}>
         <TodoList   key={todo.id} todo={todo} />
         </div>)
 
       })}
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {addTodo, toggleTodo})(App);