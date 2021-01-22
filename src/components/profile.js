import React from 'react'
import { Paper, Button} from '@material-ui/core';
import cookie from 'react-cookies'
import UserApi from '../services/userApi';
import { Redirect} from "react-router-dom";

export default class Profile extends React.Component {  
  constructor(){
    super()
    this.state = {
      redirected: null
    }
  }
  render() {
    const token = cookie.load('token')
    if(!token || this.state.redirected){
      return(
        <Redirect push to={'/'}/>
      )
     }
    return(  
      <Paper elevation={3} className='profile_cont'>
        <div className='profile_info'>
          <div>Email</div>
          <div>History of orders</div>
          <Button variant='contained' color='secondary' onClick={() => {this.logOut()}}>LOG OUT</Button>
        </div>
      </Paper>  
  )}
  logOut(){    
    new UserApi().deleteSession().then(
      (result) => {
        console.log(result) 
        cookie.remove('token', { path: '/' })
        cookie.remove('email', { path: '/' }) 
        this.setState({
          redirected: true
        })   
      }
    )
  }
}

