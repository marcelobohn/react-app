// node
// vendors
import React from 'react';
// project
import Menu from './components/menu';
import Welcome from './components/welcome';

import { Button } from 'react-bootstrap';

import './styles.scss';

const App = () => (
  <div className='main-app'>
    <Welcome />
    <Menu />
    <Button bsStyle='success'>Success</Button>
  </div>
);

export default App;
