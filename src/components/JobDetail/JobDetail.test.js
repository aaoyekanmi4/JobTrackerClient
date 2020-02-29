import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import JobDetail from './JobDetail';


describe('JobDetail component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<JobDetail />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});