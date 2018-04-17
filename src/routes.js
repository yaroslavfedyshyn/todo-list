import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import TodoBaseContainer from './stories/todos/containers/Base';
import {
    ROUTE_TO_ROOT,
    ROUTE_TO_TODOS,
} from './constants/routes';

export default () => (
    <Switch>
        <Route exact path={ROUTE_TO_ROOT} render={() => (
            <Redirect to={ROUTE_TO_TODOS} />
        )} />

        <Route exact path={ROUTE_TO_TODOS} component={TodoBaseContainer} />
    </Switch>
);
