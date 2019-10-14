import { ADD_TODO, SET_TODOS, DELETE_TODO, TOGGLE_TODO } from 'actions/index.js'
import { addTodo, setTodos, deleteTodo, toggleTodo } from 'actions/index.js'

const initialState = {
    todos: []
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos, action.todo]
            }
        case SET_TODOS:
            return {
                todos: action.todos
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id !== action.id) {
                        return todo
                    }

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })
            }
        default:
            return state
    }
}

export default globalReducer