import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.global.css';

function checkPlatform() {
  return function(p1: React.MouseEvent<HTMLButtonElement>) {
    console.log(navigator.platform);
  };
}

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={icon} />
      </div>
      <h1>Virtual Neuro Machine</h1>
      This application will help you get started with VNM!
      <div className="Hello">
        <button type="button" onClick={checkPlatform()}>
          <span role="img" aria-label="books">
            📚
          </span>
          Read our docs
        </button>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
