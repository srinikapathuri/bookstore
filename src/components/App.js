import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Home from './components/Home';
import Admin from './components/Admin';
import Login from './components/Login';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/admin" component={Admin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
