import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
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