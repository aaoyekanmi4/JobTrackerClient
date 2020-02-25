import React from 'react';
import {Redirect} from 'react-router-dom';
import TokenService from '../../services/TokenService'


const PrivateRoute = (props) => {
    return (
        <div>
    {TokenService.hasAuthToken() ? props.children :<Redirect to="/login" />}
        </div>
      
    )
}

export default PrivateRoute;