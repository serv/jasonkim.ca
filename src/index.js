import React from 'react';
import { render } from 'react-dom';
import App from './app';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-28018879-8');
render(<App />, document.getElementById('app'));
