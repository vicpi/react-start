import React, { useEffect } from 'react'
import headerImage from '../../images/header-image.jpg'
import FeatureList from 'components/FeatureList/FeatureList'
import './Main.scss'

const FEATURES = [
    'React',
    'Redux',
    'React Router',
    'Server Side Rendering',
    'Hot Module Reloading',
    'SCSS',
]

function Main(props) {
    useEffect(() => {
        if (props.features === undefined) {
            props.setFeatures(FEATURES)
        }
        console.log(`This is a ${process.env.NODE_ENV} mode`)
    }, [])

    return (
        <div className="Main">
            <header className="Main-header">
                <img className="header-image" src={headerImage} alt="To Do List" />
                <h1>React Start</h1>
            </header>
            <section className="text">
                <p><strong>React Start</strong> is a convenient starting point for creating React applications.</p>
                <p>It includes the following: </p>
                <FeatureList features={props.features} />
            </section>
        </div>
    )
}

export default Main