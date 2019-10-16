import React from 'react'
import PropTypes from 'prop-types'
import TextField from 'components/TextField/TextField'
import CTodoItem from 'containers/CTodoItem/CTodoItem'
import { generateTodo } from 'helpers'

const TodoList = (props) => {
    console.log(props, 'TodoList render')

    const createNewTodo = (title) => {
        const todo = generateTodo(title)
        props.addTodo(todo)
    }

    return <div className="todolist-wrapper">
        <TextField autoFocus={true} onChange={createNewTodo} />
        <ul className="todo-list">
            {props.todos.map(
                todo => <CTodoItem todo={todo} key={todo.id} />
            )}
        </ul>
    </div>
}

TodoList.propTypes = {
    addTodo: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        completed: PropTypes.bool
    })).isRequired
}

export default TodoList