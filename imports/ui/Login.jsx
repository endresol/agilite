import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2>
      
        <div>Login form here</div>
      
        <Link to="/signup">Registrer deg</Link>
     </div>
     );
  }
}

export default Login;