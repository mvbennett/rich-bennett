import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router, Route, Navigate, Routes
} from 'react-router-dom';
import { createBrowserHistory as history } from 'history';
import App from './components/App';
import Projects from './components/Projects';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  // root.render(<App />);
  root.render(
    <Router history={history}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}
