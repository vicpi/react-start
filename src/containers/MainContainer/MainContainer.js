import { hot } from 'react-hot-loader/root'
import { connect } from 'react-redux'
import Main from 'components/Main/Main'
import { setFeatures } from '../../actions'

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}
const mapDispatchToProps = { setFeatures }

export default hot(connect(mapStateToProps, mapDispatchToProps)(Main));