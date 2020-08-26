import React from 'react';
import { Redirect, Route} from 'react-router-dom';

export const PrivateRoute = ({component:Component, redirect, connected, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            connected ?
                <Component {...props} />
            : <Redirect to={redirect ? redirect : '/login'} />
        )} />
    )
}


