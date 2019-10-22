import React, { useEffect } from 'react'

const FEATURES = require('features')

const FeatureList = (props) => {
    useEffect(() => {
        if (props.features === undefined) {
            props.setFeatures(FEATURES)
        }
        console.log(`This is a ${process.env.NODE_ENV} mode`)
    }, [])

    return props.features
        ? props.features.map(
            (feature, index) => <p key={index}>{`- ${feature}`}</p>
        )
        : null
}

export default FeatureList