import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
    const setTodos = jest.fn()
    const div = document.createElement('div');
    ReactDOM.render(<App setTodos={setTodos} />, div);
    ReactDOM.unmountComponentAtNode(div);
});
