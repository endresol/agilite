import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import ShortLink from './../imports/ui/ShortLink';
import NotFound from './../imports/ui/NotFound';

const routes = (
    <Router>
    <div>
      <ul> 
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/links">Links</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/links" component={ShortLink} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
 );

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
