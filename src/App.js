import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { MultiStepForm } from './components/MultiStepForm'
import { Opening } from './Opening';

function App() {
  return (
  <Router>
  <Switch>
      <Route exact path="/" component={Opening} />
      <Route path="/details" component={MultiStepForm} />
  </Switch>
</Router>
  )
}

export default App;
/** return (
    <div className="App">
      <Opening />
     <MultiStepForm />
    </div>
  ); */