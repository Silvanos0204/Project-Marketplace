import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Index from '../pages/header/index';


const Routes: React.FC = () =>  (
  <Switch>
    <Route  path="/" component={Index}/>
  </Switch>
);

export default Routes;
