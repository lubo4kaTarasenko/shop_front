import {AppBar,Toolbar, Button} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import cookie from 'react-cookies'

export default class Header extends React.Component {
 render(){
   //const token = cookie.load('token')
   const token = true;
   return(
    <AppBar position="static"> 
     { this.renderIfAuth(token) }
   </AppBar>
   )
 }
 renderIfAuth(token){
  if (!token){
    return(
      <Toolbar className='nav_cont'>    
        <h2>Let it be shop</h2> 
        <div className='header'> 
          <Button variant="contained" color='primary'><Link to="/sign_up">Sign up</Link></Button>
            &nbsp;&nbsp;
          <Button variant="contained" color='primary'><Link to="/log_in">Log in</Link></Button>          
        </div>         
      </Toolbar>       
  )}
  else{
    return(
      <Toolbar className='nav_cont'> 
           <h2>Let it be shop</h2> 
          <div className='header'>     
            <Button variant="contained" color='primary'><Link to="/profile">Profile</Link></Button>
            &nbsp;&nbsp;
            <Button variant="contained" color='primary'><Link to="/home">Home</Link></Button>
            &nbsp;&nbsp;
            <Button variant="contained" color='primary'><Link to="/#">Trash</Link></Button>
          </div>
      </Toolbar> 
  )}
} 
   
}