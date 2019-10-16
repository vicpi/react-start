import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import App from 'components/App/App'
import { setTodos } from '../../actions/index'

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = { setTodos }

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));