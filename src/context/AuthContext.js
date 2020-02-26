import React, { useState } from 'react';
import TokenService from '../services/TokenService';
const AuthContext = React.createContext();

const AuthContextProvider = props => {

    const [loggedIn, setLoggedIn] = useState(false);
const sendLoginCredentials = (credentials, cb) => {
        fetch('http://localhost:8000/api/auth/login', {
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
            })
            .catch(res => cb(res.error))
        
     }
     
     const registerUser = (credentials, cb) =>{
         fetch('http://localhost:8000/api/users', {
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
              TokenService.saveAuthToken(responseJSON.authToken)
          })
          .catch(res => cb(res.error))
     }
 
}
