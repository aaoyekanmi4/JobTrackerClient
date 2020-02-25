import TokenService from './TokenService';

const AuthService = {
    sendLoginCredentials (credentials, cb) {
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
           })
           .catch(res => cb(res.error))
       
    },
    
    registerUser(credentials, cb){
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

export default AuthService;