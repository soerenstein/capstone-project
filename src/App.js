import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateContact from './components/CreateContact/CreateContact';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/create">
          <CreateContact />
        </Route>    
      </Switch>
    </Router>
  )
}

export default App;
