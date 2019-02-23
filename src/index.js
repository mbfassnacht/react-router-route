import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class NoAuthRoute extends Component {
    render() {
        const {
            component: InnerComponent,
            isAuthenticated,
            config,
            ...rest } = this.props;
        return (
            <Route {...rest} render={(props) => (
                isAuthenticated()
                    ? <Redirect to={config.defaultUrl.authenticated} />
                    : <InnerComponent {...props} />
            )} />
        );
    }
}

class PrivateRoute extends Component {

    render() {
        const {
            component: InnerComponent,
            isAuthenticated,
            config,
            ...rest } = this.props;
        return (
            <Route {...rest} render={(props) => (
                isAuthenticated()
                    ? <InnerComponent {...props} />
                    : <Redirect to={config.defaultUrl.noAuthenticated} />)} />
        );
    }
}

export {
    PrivateRoute,
    NoAuthRoute,
}
