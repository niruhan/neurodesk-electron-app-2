import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import { exec } from 'child_process';
import logo from '../../assets/logo.png';
import './App.global.css';

let platform = '';

if (navigator.platform.toLowerCase().includes('linux')) {
  platform = 'linux';
} else if (navigator.platform.toLowerCase().includes('mac')) {
  platform = 'mac';
} else if (navigator.platform.toLowerCase().includes('win')) {
  platform = 'win';
}

function checkPlatform() {
  return function () {
    console.log(navigator.platform.toLowerCase().includes('linux'));
  };
}

function runVnmFirst() {
  return function () {

    let runVnmFirstCommand = '';
    if (platform === 'linux') {
      runVnmFirstCommand =
        'sudo docker run --privileged --name vnm -v ~/vnm:/vnm -v /dev/shm:/dev/shm -e USER=neuro -p 6080:80 vnmd/vnm:20210523';
    } else if (platform === 'mac') {
      runVnmFirstCommand =
        'docker run --privileged --name vnm -v ~/vnm:/vnm -e USER=neuro -p 6080:80 vnmd/vnm:20210523';
    } else if (platform === 'win') {
      runVnmFirstCommand =
        'docker run --privileged --name vnm -v C:/vnm:/vnm -e USER=neuro -p 6080:80 vnmd/vnm:20210523';
    }
    exec(runVnmFirstCommand, (err, stdout, stderr) => {
      console.log(err);
      console.log(stdout);
      console.log(stderr);
    });
  };
}

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <img width="200px" alt="icon" src={logo} />
      </div>
      <h1>Virtual Neuro Machine</h1>
      This application will help you get started with VNM!
      <div className="Hello">
        <button type="button" onClick={checkPlatform()}>
          Check Platform
        </button>
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
