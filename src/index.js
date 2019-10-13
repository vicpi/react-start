import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const wrapper = document.getElementById('create-article-form');
wrapper ? ReactDOM.render(<App />, wrapper) : false;