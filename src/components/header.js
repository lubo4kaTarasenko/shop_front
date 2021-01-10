import {AppBar,Toolbar, Button, TextField, Grid} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import cookie from 'react-cookies'
import SearchIcon from '@material-ui/icons/Search';


export default class Header extends React.Component {
 render(){
   //const token = cookie.load('token')
   const token = true;
   return(
    <AppBar position="static"> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={4} className='header_item'> <h2>Let it be shop</h2></Grid> 
            <Grid item xs={3} className='header_item'>{this.searchForm()}</Grid> 
            <Grid item xs={2} className='header_item'><h4>login as blablabla</h4></Grid>
            <Grid item xs={3} className='header_item'>{ this.renderIfAuth(token) }</Grid> 
          </Grid>
        </Toolbar>
   </AppBar>
   )
 }
 renderIfAuth(token){
  if (!token){
    return( 
        <div className='header'> 
          <Button variant="contained" color='primary'><Link to="/sign_up">Sign up</Link></Button>
            &nbsp;&nbsp;
          <Button variant="contained" color='primary'><Link to="/log_in">Log in</Link></Button>          
        </div>               
  )}
  else{
    return(
          <div className='header'>     
            <Button variant="contained" color='primary'><Link to="/profile">Profile</Link></Button>
            &nbsp;&nbsp;
            <Button variant="contained" color='primary'><Link to="/home">Home</Link></Button>
            &nbsp;&nbsp;
            <Button variant="contained" color='primary'><Link to="/#">Trash</Link></Button>
          </div>
  )}
} 
searchForm(){
  return(
  <span class='search_cont'><TextField label={ <SearchIcon id='search_i'/>} variant="filled" id='search_input' /></span>
  )
}
   
}