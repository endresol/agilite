import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';

import { history } from 'react-router-dom';

class ShortLink extends Component {
  logout () {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h2>In Link</h2>
        <button onClick={this.logout.bind(this)}>Logg ut</button>
      </div>
    );
  }
}

export default ShortLink;
