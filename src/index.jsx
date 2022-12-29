import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router, Route, Redirect, Switch
} from 'react-router-dom';
import { createHistory as history } from 'history';
import App from './components/App';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  // root.render(<App />);
  root.render(
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
        <Redirect from="/" to="/" />
      </Switch>
    </Router>
  );
}
