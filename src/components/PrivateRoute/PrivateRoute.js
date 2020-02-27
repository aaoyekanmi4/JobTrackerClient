import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const PrivateRoute = (props) => {
    const {loggedIn} = useContext(AuthContext);

    return (
        <div>
    {loggedIn? props.children :<Redirect to="/login" />}
        </div>
      
    )
}

export default PrivateRoute;