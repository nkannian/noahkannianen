import React from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';
import { Router, Route } from 'react-router-dom';

import Header from './common/header'
import HomeComponent from './components/home';
import AboutMeComponent from './components/aboutMe';
import ExperienceComponent from './components/experience';
import ProjectsComponent from './components/projects';
import SkillsComponent from './components/skills';

export const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Route exact path="/" component={HomeComponent} />
        <Route exact path="/aboutme" component={AboutMeComponent} />
        <Route exact path="/experience" component={ExperienceComponent} />
        <Route exact path="/skills" component={SkillsComponent} />
        <Route exact path="/projects" component={ProjectsComponent} />
      </div>
    </Router>
  );
}

export default App;