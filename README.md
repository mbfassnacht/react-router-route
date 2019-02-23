# react-router-route

Use react-router routes in a powerful way.

### Create your config
```js
export default {
    defaultUrls: {
        authenticated: '/dashboard',
        noAuthenticated: '/',
    }
};
```

### Create your authentication method
Take a look to [jwt-authentication-helper](https://www.npmjs.com/package/jwt-authentication-helper "jwt-authentication-helper") package ;)

#### React Router with react-router-route example:
```js
import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import LoginView from '../views/loginView/LoginView';
import DashboardView from '../views/dashboardView/DashboardView';
import UserProfileView from '../views/userProfileView/UserProfileView';
import PrivateRoute from '../components/privateRoute/PrivateRoute';
import NoAuthRoute from '../components/noAuthRoute/NoAuthRoute';
import config from '../../config';

export default class App extends Component {

    render() {
        return (
            <Provider>
                <BrowserRouter>
                    <Switch>
                        <NoAuthRoute isAuthenticated={yourMethod} config={config} exact name="login" path="/" component={LoginView} />
                        <PrivateRoute isAuthenticated={yourMethod} config={config} exact path="/dashboard" component={DashboardView} />
                        <PrivateRoute isAuthenticated={yourMethod} config={config} exact path="/user" component={UserProfileView} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}

```
