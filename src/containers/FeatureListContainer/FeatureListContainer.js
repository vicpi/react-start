import { connect } from 'react-redux'
import FeatureList from 'components/FeatureList/FeatureList'
import { setFeatures } from '../../actions'

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}
const mapDispatchToProps = { setFeatures }

export default connect(mapStateToProps, mapDispatchToProps)(FeatureList);