import React from 'react';

import {connect} from 'react-redux'
import {toggleTodo} from '../actions'

const TodoList = (props)=> {
    console.log(props)
    return (
        <h1 style={props.todo.completed ? {textDecoration: 'line-through'} : null} >
            {props.todo.task}
        </h1>
    );
};
const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}
export default connect(mapStateToProps, {toggleTodo})(TodoList);