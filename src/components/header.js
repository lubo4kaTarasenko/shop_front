import {AppBar,Toolbar, Button, TextField, Grid, IconButton} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
//import cookie from 'react-cookies'
import {Home, AccountBox,ShoppingCart, Search } from '@material-ui/icons';

export default class Header extends React.Component {
 render(){
   //const token = cookie.load('token')
   const token = true;
   return(
    <AppBar position="static"> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={5} sm={5} className='header_item'> <h2>Let it be shop</h2></Grid> 
            <Grid item xs={7} sm={3} className='header_item'>{this.searchForm()}</Grid> 
            <Grid item xs={6} sm={2} className='header_item'><h4>login as blabla</h4></Grid>
            <Grid item xs={6} sm={2} className='header_item'>{ this.renderIfAuth(token) }</Grid> 
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
            <IconButton><Link to="/profile"><AccountBox/></Link></IconButton>
            &nbsp;&nbsp;
            <IconButton><Link to="/home"><Home/></Link></IconButton>
            &nbsp;&nbsp;
            <IconButton><Link to="/#">< ShoppingCart/></Link></IconButton>
          </div>
  )}
} 
searchForm(){
  return(
  <span className='search_cont'><TextField label={ <Search id='search_i'/>} variant="filled" id='search_input' /></span>
  )
}
   
}