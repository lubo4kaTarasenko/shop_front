import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Button, IconButton} from '@material-ui/core';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import {ShoppingCart} from '@material-ui/icons';

export default function Cart() {
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
              horizontal: -100,
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
                  <img src={'/sad-cart.png'} alt='' width='200'/>
                  <hr/>
                  Your cart is empty now. 
                  But you can fix it)
              </Typography>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
