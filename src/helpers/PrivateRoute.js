import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, flag, redirectPath=`${process.env.PUBLIC_URL}/`, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                flag() ? (
                    <Component {...props} />
                ) : (
                        <Redirect
                            to={{
                                pathname: redirectPath
                            }}
                        />
                    )
            }
        />
    );
}

export default PrivateRoute;