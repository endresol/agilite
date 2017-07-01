import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
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

    Meteor.loginWithPassword({email}, password, (err)=> {
      console.log('login error', err);
      if (err) {
        this.setState({ error: 'Wrong email or password' });
      } else {
        this.setState({ error: '' });
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Logg inn</h2>
        {this.state.error ? <p>{this.state.error}</p>: undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="email" ref="email" name="email" placeholder="E-post" />
          <input type="password" ref="password" name="password" placeholder="Passord" />
          <button>Logg inn</button>
        </form>

        <Link to="/signup">Registrer deg</Link>
     </div>
     );
  }
}

export default Login;
