import React from 'react';
import { Route } from 'react-router-dom';
import CMain from 'containers/CMain/CMain';
import Footer from 'components/Footer/Footer'
import About from 'components/About/About';
import './App.scss'

const App = () => (
    <>
        <div className="App">
            <Route exact path="/" component={CMain} />
            <Route exact path="/about/" component={About} />
        </div>
        <Footer />
    </>
);

export default App;
