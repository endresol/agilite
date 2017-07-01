import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Tracker } from 'meteor/tracker';

import Login from './../imports/ui/Login';
import Signup from './../imports/ui/Signup';
import ShortLink from './../imports/ui/ShortLink';
import NotFound from './../imports/ui/NotFound';

import history from './../imports/ui/history';

const unauthenticatedPages = ['/', '/singup'];
const authenticatedPages = ['/links'];

const routes = (
    <Router history={history}>
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

 Tracker.autorun(() => {
   const isAuthenticated = !!Meteor.userId();
   const pathname = this.location.pathname;
   const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
   const isAuthenticatedPage = authenticatedPages.includes(pathname)

   if ( isUnauthenticatedPage && isAuthenticated) {
    //  console.log('not auth', this);
     history.replace('/links');
   } else if ( isAuthenticatedPage && !isAuthenticated) {
    //  console.log('auth', history);
     history.replace('/');
   };
 });

Meteor.startup(() => {
  ReactDOM.render(routes, document.getElementById('app'));
});
