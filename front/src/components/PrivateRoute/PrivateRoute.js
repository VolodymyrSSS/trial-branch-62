import React from 'react';  
import {Redirect, Route } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) =>{

    const {loginIs} = {...rest};

    return(  
        <Route {...rest} render={props => (

            loginIs
            ? <Component {...props}/>

            :<Redirect to={{
                pathname: '/login',
                state: { from: props.location }
                }}
            />
        )}/>
    )
};

export default PrivateRoute;
