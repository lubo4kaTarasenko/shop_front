import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button, IconButton} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {ShoppingCart, Add, Remove} from '@material-ui/icons';
import { useAtom } from 'jotai'
import {cartAtom} from '../atoms/shopAtoms'

export default function Cart() {
  const [cart, setCart] = useAtom(cartAtom)
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
              <Typography>
                  Cart
                  <hr/>                  
                  {renderCart()}
              </Typography>
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
                <IconButton 
                 style={{color: 'red'}}>< Remove/>
                </IconButton>
                <span><b>{product.count}</b></span>
                <IconButton
                   style={{color: 'green'}}><Add/>
               </IconButton>         
                <hr/>
              </div>)}
              <div>Total: </div>   
              <Button color='primary' variant='contained'>Make an order</Button>          
        </React.Fragment>
      )
    }
    else{
      return(
        <React.Fragment>8
          <img src={'/sad-cart.png'} alt='' width='200'/>
          <hr/>
          Your cart is empty now. 
          But you can fix it)
        </React.Fragment>
      )
    }
  }
}
