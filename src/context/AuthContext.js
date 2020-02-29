import React, { useState } from 'react';
import TokenService from '../services/TokenService';
import {useHistory } from 'react-router-dom';
import {API_BASE_URL} from '../config';

const AuthContext = React.createContext();


const AuthContextProvider = props => {
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
const sendLoginCredentials = (credentials) => {
        fetch(`${API_BASE_URL}/api/auth/login`, {
            method:'POST',
            headers: {
             'content-type': 'application/json'
           },
           body: JSON.stringify(credentials)
         })
         .then(response => {
             if (!response.ok) {
                 return response.json().then(e =>Promise.reject(e))
               }
               return response.json();
         })
            .then(responseJSON => {
                console.log(responseJSON)
                TokenService.saveAuthToken(responseJSON.authToken)
                
                setLoggedIn(true);
                history.push('/jobs')
            })
            .catch(res => setError(res.error))
        
     }
     
     const registerUser = (credentials) =>{
         fetch(`${API_BASE_URL}/api/users`, {
             method:'POST',
             headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(credentials)
          })
          .then (response => {
              if (!response.ok) {
                 
                 return response.json().then(e =>Promise.reject(e))
             }
             return response.json();
              })
          .then(responseJSON => {
              console.log(responseJSON)
              setLoggedIn(true);
              TokenService.saveAuthToken(responseJSON.authToken)
              history.push('/')
          })
          .catch(res => setError(res.error))
     }
    
     const logout = () => {
       TokenService.clearAuthToken();
       setLoggedIn(false);
       history.push("/login");
     };
    return (
        <AuthContext.Provider value={{ registerUser, sendLoginCredentials, loggedIn, logout, error, setError}}>
              {props.children}
     </AuthContext.Provider>
 
    ) 
}

export {AuthContext, AuthContextProvider};
