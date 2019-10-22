import { hot } from 'react-hot-loader/root'
import React from 'react';
import { Route } from 'react-router-dom';
import Main from 'components/Main/Main';
import Footer from 'components/Footer/Footer'
import About from 'components/About/About';
import './App.scss'

const App = () => (
    <>
        <div className="App">
            <Route exact path="/" component={Main} />
            <Route exact path="/about/" component={About} />
        </div>
        <Footer />
    </>
);

export default hot(App);
