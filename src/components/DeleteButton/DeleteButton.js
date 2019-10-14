import React from 'react'
import PropTypes from 'prop-types'

const DeleteButton = (props) => {
    return <span className="delete" onClick={props.onClick}></span>
}

DeleteButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default DeleteButton