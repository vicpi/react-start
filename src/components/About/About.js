import React, {useState, useEffect} from 'react'
import Footer from 'components/Footer/Footer'
import FeatureListContainer from 'containers/FeatureListContainer/FeatureListContainer'
import './About.scss'

function About(props) {
    return (
        <div className="About">
            <h1>About</h1>
            <p><strong>React Start</strong> is a convenient starting point for creating React applications.</p>
            <p>It includes the following: </p>
            <FeatureListContainer />
        </div>
    )
}

export default About