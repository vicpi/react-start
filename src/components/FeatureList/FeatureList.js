import React, { useEffect } from 'react'
import Feature from 'components/Feature/Feature';

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
            (feature, index) => <Feature key={index} text={feature} />
        )
        : null
}

export default FeatureList