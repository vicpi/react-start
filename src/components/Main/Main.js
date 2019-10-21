import React, { useEffect } from 'react'
import headerImage from '../../images/header-image.jpg'
import './Main.scss'

function Main(props) {
    useEffect(() => {
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
                <p>- React </p>
                <p>- Redux </p>
                <p>- React Router </p>
                <p>- SCSS </p>
                <p>- Server Side Rendering </p>
                <p>- Hot Module Reloading </p>
            </section>
        </div>
    )
}

export default Main