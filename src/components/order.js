import React from 'react';
import {useRef} from 'react';
import { useAtom } from 'jotai'
import {cartAtom} from '../atoms/shopAtoms'
import cookie from 'react-cookies'
import {TextField, Button, Paper} from '@material-ui/core';
import OrderApi from '../services/orderApi';

export default function Order() {
  const [cart, setCart] = useAtom(cartAtom)
  const first_name = useRef(null);
  const last_name = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const city = useRef(null);
  const post_office = useRef(null);
  return(
    <Paper className='order_cont'>
      <form onSubmit={(e)=> {makeOrder(e)}}>
        <h1 className='order_headers'>Checkout</h1>
        <div className='order_info'>
          <TextField label="First name" variant='outlined' inputProps={ { ref: first_name } } required/>
        </div>
        <div className='order_info'>
          <TextField label="Last name"variant='outlined'  inputProps={ { ref: last_name } }required/>
        </div>
        <div className='order_info'>
          <TextField label="City" variant='outlined'  inputProps={ { ref: city } }required />
        </div>
        <div className='order_info'>
          <TextField label="Phone"variant='outlined'  inputProps={ { ref: phone } }required/>
        </div>
        <div className='order_info'>
          <TextField label="Email"variant='outlined' type='email'  inputProps={ { ref: email } }required/>
        </div>
        <div className='order_info'>
          <TextField label="New Post office number" variant='outlined' inputProps={ { ref: post_office } }required/>
        </div>
        <div className='order_info'>
          <Button variant='contained' color='primary' type="submit" >Confirm order</Button>
        </div>
      </form>
    </Paper>
  )
  function makeOrder(e){
    e.preventDefault();
    let mapCart = (Object.values(cart));
    let products = mapCart.map(p => { return { product_id: p.id, number: p.count } })
    global.email = email;

    const info = {
      products: products,
      email: email.current.value,
      phone: phone.current.value,
      first_name: first_name.current.value,
      last_name: last_name.current.value,
      city: city.current.value,
      post_office: post_office.current.value
    }
    console.log('info; ', JSON.stringify(info))
    new OrderApi().postProductsIds(info).then(
      (result) => {
        console.log(result)  
        window.location.replace(result.next);        
      },
    )
  }
}