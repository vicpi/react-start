import React from 'react';
import PropTypes from 'prop-types';

const Feature = (props) => {
    return <p>{`- ${props.text}`}</p>;
}

Feature.propTypes = {
    text: PropTypes.string.isRequired
}

export default Feature;