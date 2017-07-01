import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  onSubmit(e) {
    e.preventDefault();

    const email = this.refs.email.value.trim();
    const password = this.refs.password.value.trim();

    Accounts.createUser({email, password}, (err) => {
      console.log('signup', err );
      if (err) {
        this.setState({ error: err.reason });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Registrering</h2>
        {this.state.error ? <p>{this.state.error}</p>: undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="E-post" />
          <input type="password" ref="password" name="password" placeholder="Passord" />
          <button>Opprett konto</button>
        </form>
        <Link to="/">Jeg har allerede en konto</Link>
      </div>
    );
  }
}

export default Signup;
