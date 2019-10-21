import { connect } from 'react-redux'
import About from 'components/About/About'
import { setFeatures } from '../../actions'

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}

export default connect(mapStateToProps)(About);