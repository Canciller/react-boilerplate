import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '@pages/Home';
import NotFound from '@pages/NotFound';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
