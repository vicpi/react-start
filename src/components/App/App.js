import React, {useState, useEffect} from 'react'
import axios from 'axios'
import RTodoList from 'containers/RTodoList/RTodoList'
import Modal from '../Modal/Modal'
import headerImage from '../../images/header-image.jpg'
import './App.scss'

function App(props) {
    useEffect(() => {
        axios.get('http://localhost:8000/todos/')
            .then(response => {
                props.setTodos(response.data)
            })
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <img className="header-image" src={headerImage} alt="To Do List" />
                <h1>To Do List</h1>
            </header>
            <section>
                {props.todos === undefined
                    ? 'Loading...'
                    : <RTodoList  />
                }
                <Modal />
            </section>
        </div>
    )
}

export default App