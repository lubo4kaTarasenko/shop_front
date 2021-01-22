import {AppBar,Toolbar,  TextField, Grid, IconButton} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountBox, Search } from '@material-ui/icons';
import SearchComp from './autocomplete';
import Cart from './cart';
import cookie from 'react-cookies'
import { Redirect} from "react-router-dom";

export default class Header extends React.Component {
  constructor(){
    super()
    this.state = {
      redirected: null
    }
  }
 render(){
   if(this.state.redirected){
    return(
      <Redirect push to={'/profile'}/>
    )
   }
   const email = cookie.load('email')
   return(
    <AppBar position="static"> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} md={2} lg={5} className='header_item'> <h2>Let it be shop</h2></Grid> 
            <Grid item xs={9} md={4} lg={3} className='header_item'><SearchComp/></Grid> 
            <Grid item xs={6} md={3} lg={2} className='header_item'><h4>{email}</h4></Grid>
            <Grid item xs={6} md={3} lg={2} className='header_item'>{ this.renderIcons() }</Grid> 
          </Grid>
        </Toolbar>
   </AppBar>
   )
 }
 renderIcons(){      
    return(
          <div className='header'>   
            <Cart/> 
            &nbsp;&nbsp;          
              {this.renderIfAuth()}
            &nbsp;&nbsp;
            <IconButton><Link to="/home"><Home/></Link></IconButton>
          </div>
  )
  } 
  searchForm(){
    return(
    <span className='search_cont'><TextField label={ <Search id='search_i'/>} variant="filled" id='search_input' /></span>
    )
  }
  renderIfAuth(){
    const token = cookie.load('token')
    if(token){
      return(
        <IconButton> 
          <Link to="/profile">
            <AccountBox style={{color:'white', marginTop: '-5px'}} />
          </Link>
        </IconButton>
      )
    }
    else{
      return(
        <IconButton>
          <a href='http://localhost:3001/users/sign_in'> <AccountBox/></a>
        </IconButton>
      )
    }
  }
  accountClick(){
    this.setState({
      redirected: true
    }) 
  }
   
}