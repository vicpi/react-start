import React from 'react';
import { Route } from 'react-router-dom';
import CApp from 'containers/CApp/CApp';

const Page = () => (
    <div>
        <Route exact path="/" component={CApp} />
        <Route exact path="/view/" component={CApp} />
    </div>
);

export default Page;
