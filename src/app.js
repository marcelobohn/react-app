import React from 'react';

import Welcome from './components/welcome';
import Profile from './components/profile';

import './styles.scss';

const App = () => (
  <div className='main-app'>
    <Welcome />
    <Profile name='Marcelo Bohn' />
  </div>
);

export default App;
