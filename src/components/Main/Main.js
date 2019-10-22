import React, { useEffect } from 'react'
import headerImage from '../../images/header-image.jpg'
import FeatureListContainer from 'containers/FeatureListContainer/FeatureListContainer'
import './Main.scss'

function Main() {
    return (
        <div className="Main">
            <header className="Main-header">
                <img className="header-image" src={headerImage} alt="React Start" />
                <h1>React Start</h1>
            </header>
            <section className="text">
                <p><strong>React Start</strong> is a convenient starting point for creating React applications.</p>
                <p>It includes the following: </p>
                <FeatureListContainer />
            </section>
        </div>
    )
}

export default Main