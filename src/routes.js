import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TodoBaseContainer from './stories/todos/containers/Base';
import {
    ROUTE_TO_TODOS,
} from './constants/routes';

export default () => (
    <Switch>
        <Route exact path={ROUTE_TO_TODOS} component={TodoBaseContainer} />
    </Switch>
);
