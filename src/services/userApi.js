import cookie from 'react-cookies'
export default class UserApi {

  createUserFetch(user){
    return fetch("http://localhost:3001/api/auth",{
      "method": "POST",
      headers: {
        'Content-Type': 'application/json',
         Accept: 'application/json'
      },
      "body": JSON.stringify({
        email: user.email,
        password: user.password
      })
      })
      .then(response => response.json())
      .catch(err => {
        console.log(err);
    });
  }  
  
  createSessionFetch(user){
    return fetch("http://localhost:3001/api/auth",{
    "method": "PUT",
    "body": JSON.stringify({
      email: user.email,
      password: user.password
    })
    })
    .then(response => response.json())
    .catch(err => {
      console.log(err);
    });
  }

 userCoockieSave(token){
  cookie.save('token', token, { path: '/' })
  }
  
  userCoockiePresent(){
    return cookie.load('token')
  }

  deleteSession(){
    cookie.remove('token', { path: '/' })
  }

}
