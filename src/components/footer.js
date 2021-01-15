import {AppBar,Toolbar, Grid} from '@material-ui/core';
import React from 'react';
import {Phone, Email, LocationOn } from '@material-ui/icons';

export default class Footer extends React.Component {
 render(){
   return(
    <AppBar position="static" className="footer" > 
        <Toolbar className='nav_cont footer_c '> 
         <Grid container>
            <Grid item xs={6} md={3} lg={3} className='header_item'> <h4>Let it be shop</h4></Grid> 
            <Grid item xs={6} md={3} lg={3} className='header_item'>
              <h4><Phone className='footer_i'/> <span className='footer_t'>333 333 3333</span></h4></Grid> 
            <Grid item xs={6} md={3} lg={3} className='header_item'>
              <h4><Email className='footer_i'/> <span className='footer_t'>blabla@gmail.com</span></h4></Grid>
            <Grid item xs={6} md={3} lg={3} className='header_item'><h4>
              <LocationOn className='footer_i'/><span className='footer_t'> Ukraine, Cherkasy, 2020</span></h4></Grid> 
          </Grid>
        </Toolbar>
   </AppBar>
   )
}}