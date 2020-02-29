import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import {AuthContext} from '../../context/AuthContext';
import App from './App';


describe('App component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
      <App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});