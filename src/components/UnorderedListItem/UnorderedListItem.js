import React from 'react';
import PropTypes from 'prop-types';

/**
 * UnorderedListItem Component. <br />
 * This component shows an item in the unordered list. <br />
 * It is typically used inside of the UnorderedList component.
 * 
 * @param {Object} props 
 */
const UnorderedListItem = ({text}) => {
    return <p>{`- ${text}`}</p>;
}

UnorderedListItem.propTypes = {
    text: PropTypes.string.isRequired
}

export default UnorderedListItem;