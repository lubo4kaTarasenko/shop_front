import React from 'react';

import {TextField, Button, Paper} from '@material-ui/core';
export default function Order() {
  return(
    <Paper className='order_cont'>
      <h1 className='order_headers'>Checkout</h1>
      <div className='order_info'><TextField label="First name" variant='outlined'/></div>
      <div className='order_info'><TextField label="Last name"variant='outlined'/></div>
      <div className='order_info'><TextField label="City" variant='outlined'/></div>
      <div className='order_info'><TextField label="Phone"variant='outlined'/></div>
      <div className='order_info'><TextField label="Email"variant='outlined'/></div>
      <div className='order_info'><TextField label="New Post office number" variant='outlined'/></div>
      <div className='order_info'>
        <Button variant='contained' color='primary' onClick={()=> {makeOrder()}}>Confirm order</Button>
      </div>
    </Paper>
  )
  function makeOrder(){

  }
}