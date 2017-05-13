import React, { Component } from 'react';
import { history } from 'react-router-dom';

class ShortLink extends Component {
  logout () {
    console.log('hei, logout');
    
    this.props.history.push('/');
  }
  render() {
    return (
      <div> 
        <h2>In Link</h2>
        <button onClick={this.logout.bind(this)}>Logg up</button>
      </div>
    );
  }
}

export default ShortLink;