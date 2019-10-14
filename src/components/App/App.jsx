import { hot } from 'react-hot-loader/root';
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import RTodoList from 'containers/RTodoList/RTodoList'
import Modal from '../Modal/Modal'
import { setTodos } from '../../actions/index'
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

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}
const mapDispatchToProps = { setTodos }

export default hot(connect(mapStateToProps, mapDispatchToProps)(App));