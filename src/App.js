import React from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import HomeComponent from './components/home';
export const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <div className="App-container">
        <Route exact path="/" component={HomeComponent} />
      </div>
    </Router>
  );
}

export default App;