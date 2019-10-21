import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import Main from 'components/Main/Main'
import { setTodos } from '../../actions/index'

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = { setTodos }

export default hot(connect(mapStateToProps, mapDispatchToProps)(Main));