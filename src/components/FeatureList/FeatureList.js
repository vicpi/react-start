import React, { useEffect } from 'react'

const FeatureList = (props) => {
    return props.features
        ? props.features.map(
            (feature, index) => <p key={index}>{`- ${feature}`}</p>
        )
        : null
}

export default FeatureList