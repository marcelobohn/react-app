import React from 'react';

import { Button, Checkbox } from 'react-bootstrap';

import './styles.scss';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeSelection = this.handleChangeSelection.bind(this);
  }
  handleClick() {
    global.console.log('button clicked');
    this.setState({
      showDetails: true,
    });
  }
  handleChangeSelection() {
    this.setState({
      showDetails: !this.state.showDetails,
      count: this.state.count + 1,
    });
  }
  render() {
    const { showDetails } = this.state;
    let name = this.props.name;
    return (
      <div className='profile'>
        <h1>{name}</h1>
        <Checkbox checked={showDetails} onChange={this.handleChangeSelection}>
          Mostrar detalhes (<span>{this.state.count}</span>)
        </Checkbox>
        <Button bsStyle='success' onClick={this.handleClick}>Success</Button>
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
