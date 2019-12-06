import React from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';
import HomeComponent from './components/home';
import AboutMeComponent from './components/aboutMe';
export const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/aboutme" component={AboutMeComponent} />
      </div>
    </Router>
  );
}

export default App;