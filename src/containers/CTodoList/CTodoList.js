import { connect } from 'react-redux'
import TodoList from 'components/TodoList/TodoList'
import { addTodo } from 'actions'

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = { addTodo  }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)