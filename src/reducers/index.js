import { SET_FEATURES } from 'actions/index.js'

const initialState = {
    features: []
}

const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEATURES:
            return {
                features: action.features
            }
        default:
            return state
    }
}

export default globalReducer