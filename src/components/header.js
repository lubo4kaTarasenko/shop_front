import {AppBar,Toolbar, Grid, IconButton} from '@material-ui/core';
import React from 'react';
import { Link } from "react-router-dom";
import {Home, AccountBox } from '@material-ui/icons';
import SearchComp from './autocomplete';
import Cart from './cart';
import cookie from 'react-cookies'
import { useAtom } from 'jotai'
import {emailAtom } from '../atoms/shopAtoms'
import { fullPath } from '../services/baseUrl';
import { useEffect } from 'react';

export default function Header(){
  const [email, setEmail] = useAtom(emailAtom)

  useEffect(()=>{
    setTimeout(()=>{
      const emailFromCookie = cookie.load('email')
      if(emailFromCookie && !email) setEmail(emailFromCookie)
    }, 1000)
  }, [])

  return(
    <AppBar position="static"> 
        <Toolbar className='nav_cont'> 
         <Grid container>
            <Grid item xs={3} md={2} lg={5} className='header_item'> <h2>Let it be shop</h2></Grid> 
            <Grid item xs={9} md={4} lg={3} className='header_item'><SearchComp/></Grid> 
            <Grid item xs={6} md={3} lg={2} className='header_item'><h4>{email}</h4></Grid>
            <Grid item xs={6} md={3} lg={2} className='header_item'>{ renderIcons() }</Grid> 
          </Grid>
        </Toolbar>
   </AppBar>
  )
 
 function renderIcons(){      
    return(
          <div className='header'>   
            <Cart/> 
            &nbsp;&nbsp;          
              {renderIfAuth()}
            &nbsp;&nbsp;
            <IconButton><Link to="/home"><Home/></Link></IconButton>
          </div>
  )}

  function renderIfAuth(){
    const token = cookie.load('token')
    if(token){
      return(
        <IconButton> 
          <Link to="/profile">
            <AccountBox style={{color:'white', marginTop: '-5px'}} />
          </Link>
        </IconButton>
    )}
    else{
      return(
        <IconButton>
          <a href={fullPath('/users/sign_in')} > <AccountBox/></a>
        </IconButton>
      )
  }}  
   
}