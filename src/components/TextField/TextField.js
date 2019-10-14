import React, {useState} from 'react'
import PropTypes from 'prop-types'


const TextField = (props) => {
    let inputRef = React.createRef()
    const keyUpHandler = (event) => {
        if (event.keyCode === 13) {
            props.onChange(event.target.value)
            inputRef.current.value = ''
        }
    }
    return <input className="new-todo" ref={inputRef} placeholder="Enter text here"
                autoFocus={props.autoFocus}
                onKeyUp={keyUpHandler}
           />
}

TextField.propTypes = {
    onChange: PropTypes.func.isRequired,
    autoFocus: PropTypes.bool.isRequired
}

export default TextField