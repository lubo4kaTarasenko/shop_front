import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button, IconButton, Paper} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {ShoppingCart, Add, Remove} from '@material-ui/icons';
import { useAtom } from 'jotai'
import {cartAtom} from '../atoms/shopAtoms'
import cookie from 'react-cookies'
import  { useState, useCallback } from 'react';

export default function Cart() {
  const [cart, setCart] = useAtom(cartAtom)
  console.log('cart render', cart)
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  return (
    <PopupState variant="popover" popupId="cart_popup">
      {(popupState) => (
        <div>
          <IconButton {...bindTrigger(popupState)}
            style={{color: 'white', float: 'left'}}>< ShoppingCart/>
          </IconButton>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: -200,
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={6}>
              <div>
                  Cart
                  <hr/>                  
                  {renderCart()}
              </div>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
  function renderCart(){  
    let mapCart = (Object.values(cart));
    console.log(mapCart)

    if(mapCart.length != 0){
      console.log(cart)
      return(
        <React.Fragment>
            {mapCart.map(product =>
              <div key={product.id}>
                <img src='/ava.jpg' alt='' width='50'/>
                <div>{product.name}</div>
                <div><b>{product.price} $</b></div>
                <IconButton style={{color: 'red'}}  onClick={ ()=> { updateCart(product, -1) } } >
                  < Remove/>
                </IconButton>
                  <span><b>{product.count}</b></span>
                <IconButton style={{color: 'green'}} onClick={ ()=> { updateCart(product, 1) } }>
                  <Add/>
               </IconButton>         
                <hr/>
              </div>)}
            <div>Total: { getTotal() }$</div>   
              <Button color='primary' variant='contained'>Make an order</Button>          
        </React.Fragment>
      )
    }
    else{
      return(
        <React.Fragment>
          <img src={'/sad-cart.png'} alt='' width='200'/>
          <hr/>
          Your cart is empty now. 
          But you can fix it)
        </React.Fragment>
      )
    }
  }

  function updateCart(product, diff){
    console.log(product)
    let currentCart = cart  
    const newCount = currentCart[product.id].count + diff;
    if(newCount > 0) {
      currentCart[product.id].count = newCount
    } else {
      delete currentCart[product.id]
    }
    
    console.log(currentCart)  
    cookie.save('cart', currentCart, { path: '/' })
    setCart(currentCart)  
    forceUpdate(); 
  } 

  function getTotal() {
    const items = Object.values(cart);
    let total = 0;

    for(let item of items) {
      total += (item.price * item.count)
    }
    return total;
  }
}
