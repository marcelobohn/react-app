// node
// vendors
import React from 'react';
// project
import Menu from './components/menu';

import { Button } from 'react-bootstrap';

import './styles.scss';

const App = () => (
  <div className='main-app'>
    <h1>Hello, World!</h1>
    <Menu />
    <Button bsStyle='success'>Success</Button>
  </div>
);

export default App;
