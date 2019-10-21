import React, {useState, useEffect} from 'react'
import Footer from 'components/Footer/Footer'
import './About.scss'

function About() {
    return (
        <div className="About">
            <h1>About</h1>
            <p>
                This is a convenient starting point for creating React applications. <br />
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