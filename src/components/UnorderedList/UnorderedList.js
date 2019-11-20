import React, { useEffect } from 'react';
import UnorderedListItem from 'components/UnorderedListItem/UnorderedListItem';

const FEATURES = require('features');

const UnorderedList = (props) => {
    useEffect(() => {
        if (props.features === undefined) {
            props.setFeatures(FEATURES);
        }
        console.log(`This is a ${process.env.NODE_ENV} mode`);
    }, []);

    return props.features
        ? props.features.map(
            (feature, index) => <UnorderedListItem key={index} text={feature} />
        )
        : null;
}

export default UnorderedList;