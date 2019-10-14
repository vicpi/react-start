export const ADD_TODO = 'ADD_TODO'
export const SET_TODOS = 'SET_TODOS'
export const DELETE_TODO = 'DELETE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        todo: {
            id: todo.id,
            title: todo.title,
            completed: false
        }
    }
}

export const setTodos = (todos) => {
    return {
        type: SET_TODOS,
        todos: todos
    }
}

export const deleteTodo = (todoId) => {
    return {
        type: DELETE_TODO,
        id: todoId
    }
}

export const toggleTodo = (todoId) => {
    return {
        type: TOGGLE_TODO,
        id: todoId
    }
}