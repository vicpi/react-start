import React from 'react';
import { Route } from 'react-router-dom';
import MainContainer from 'containers/MainContainer/MainContainer';
import Footer from 'components/Footer/Footer'
import About from 'components/About/About';
import './App.scss'

const App = () => (
    <>
        <div className="App">
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/about/" component={About} />
        </div>
        <Footer />
    </>
);

export default App;
