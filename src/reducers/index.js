import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions";

const initState = {
  todos: [
    { task: "Walk the Dog", id: 1528817077286, completed: false },
    { task: "Wash the Car", id: 1528817084358, completed: false },
    { task: "Learn Redux", id: 1528817087286, completed: false }
  ]
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };

    // case DELETE_TODO:
    //   return todos.filter(todo => !todo.completed);

    default:
      return state;
  }
};

export default reducer;
