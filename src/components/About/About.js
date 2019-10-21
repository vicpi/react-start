import React, {useState, useEffect} from 'react'
import Footer from 'components/Footer/Footer'
import FeatureList from 'components/FeatureList/FeatureList'
import './About.scss'

function About(props) {
    return (
        <div className="About">
            <h1>About</h1>
            <p>
                This is a convenient starting point for creating React applications. <br />
                It includes the following: <br />
                <FeatureList features={props.features} />
            </p>
        </div>
    )
}

export default About