import { connect } from 'react-redux'
import TodoItem from 'components/TodoItem/TodoItem'
import { deleteTodo, toggleTodo } from 'actions'

const mapDispatchToProps = { toggleTodo, deleteTodo }

export default connect(null, mapDispatchToProps)(TodoItem)