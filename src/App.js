import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import CatPage from './pages/CatPage';
import AdvicePage from './pages/AdvicePage';

export default function App() {
  return (
    <>
      <Router>

        <Header />
        <Switch>

          <Route path="/" exact>
            <AdvicePage/>
          </Route>

          <Route path="/randomcat">
            <CatPage/>
          </Route>

        </Switch>

      </Router>
    </>
  );
}
