import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Checkbox from 'components/Checkbox/Checkbox'
import DeleteButton from 'components/DeleteButton/DeleteButton'

class TodoItem extends Component {
    deleteHandler = () => {
        this.props.deleteTodo(this.props.todo.id)
    }

    toggleHandler = () => {
        this.props.toggleTodo(this.props.todo.id)
    }

    render() {
        console.log('TodoItem render', this.props.todo)

        return <li data-id={this.props.todo.id}>
            <Checkbox completed={this.props.todo.completed}
                      toggleHandler={this.toggleHandler}
            />
            <label>{this.props.todo.title}</label>
            <DeleteButton onClick={this.deleteHandler} />
        </li>
    }
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        completed: PropTypes.bool
    }).isRequired,
    deleteTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoItem