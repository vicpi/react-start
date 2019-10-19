import React from 'react';
import { Route } from 'react-router-dom';
import CApp from 'containers/CApp/CApp';
import Footer from 'components/Footer/Footer'
import About from 'components/About/About';
import './Page.scss'

const Page = () => (
    <>
        <div className="page">
            <Route exact path="/" component={CApp} />
            <Route exact path="/about/" component={About} />
        </div>
        <Footer />
    </>
);

export default Page;
