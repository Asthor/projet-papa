import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Evenements from './forms/evenement1/view';
import './style.css';

const App = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Evenements} />
    </Switch>
  </main>
);

export default App;
