import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = document.createElement('cards');
  ReactDOM.render(<List cards={[1, 2]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="List-header" cards={['a', 'b']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });