import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const Checkbox = (props) => {
    return <span className="custom-checkbox" onClick={props.toggleHandler}>
        {props.completed
            ? <FontAwesomeIcon icon={faCheck} />
            : null
        }
        <input className="real-checkbox" type="checkbox" defaultChecked={props.completed} />
    </span>
}

Checkbox.propTypes = {
    toggleHandler: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired
}

export default Checkbox