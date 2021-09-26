import React from 'react';
import { Switch, Route } from 'react-router';

export default (
    <Switch>
        <Route path="/" />
        <Route path="/notice" />
        <Route path="/intro" />
        <Route path="/ready" />
        <Route path="/reservation" />
        <Route path="help" />
        <Route path="faq" />
    </Switch>
)