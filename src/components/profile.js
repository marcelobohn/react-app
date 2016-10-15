import React from 'react';

import { Button } from 'react-bootstrap';

import './styles.scss';

function binding(fn, ...args) {
  return fn.bind(fn, ...args);
}

class Profile extends React.Component {
  handleClick() {
    alert('clicked');
  }
  render() {
    let name = this.props.name;
    return (
      <div className='profile'>
        <h1>{name}</h1>
        <Button bsStyle='success' onClick={binding(this.handleClick)}>Success</Button>
      </div>
    );
  }
}

Profile.propTypes = {
  name: React.PropTypes.string,
};

Profile.defaultProps = {
  name: 'unnamed',
};

export default Profile;
