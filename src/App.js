import React from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';

import Header from './common/header'
import HomeComponent from './components/home';
import AboutMeComponent from './components/aboutMe';
import ProjectsComponent from './components/projects';

export const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/aboutme" component={AboutMeComponent} />
        <Route exact path="/projects" component={ProjectsComponent} />
      </div>
    </Router>
  );
}

export default App;