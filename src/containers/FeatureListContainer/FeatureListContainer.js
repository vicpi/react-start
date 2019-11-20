import { connect } from 'react-redux'
import UnorderedList from 'components/UnorderedList/UnorderedList'
import { setFeatures } from '../../actions'

const mapStateToProps = (state) => {
    return {
        features: state.features
    }
}
const mapDispatchToProps = { setFeatures }

export default connect(mapStateToProps, mapDispatchToProps)(UnorderedList);