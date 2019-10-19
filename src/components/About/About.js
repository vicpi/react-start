import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CTodoList from 'containers/CTodoList/CTodoList'
import Footer from 'components/Footer/Footer'
import Modal from '../Modal/Modal'
import headerImage from '../../images/header-image.jpg'
import './About.scss'

function About(props) {
    useEffect(() => {
        axios.get('http://localhost:8000/todos/')
            .then(response => {
                props.setTodos(response.data)
            })
    }, [])

    return (
        <div className="About">
            <h1>About</h1>
            <p>
                This is a convenient project starter for creating React applications. <br />
                It includes the following: <br />
                - React <br />
                - Redux <br />
                - React Router <br />
                - SCSS <br />
                - Server Side Rendering <br />
                - Hot Module Reloading <br />
            </p>
        </div>
    )
}

export default About