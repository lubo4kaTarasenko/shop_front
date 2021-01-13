import React from 'react';
import {
 Select,
 MenuItem,
 Grid,
 TextField
} from '@material-ui/core';

function FilterProducts() {
  return (
    <Grid container>
      <Grid item xs={12} sm={8}></Grid>
      <Grid item xs={7} sm={2}>
      <TextField className="price price_from" label="price from:" variant="outlined"  style={{width: 100}} />
      <TextField className="price price_to" label="price to:" variant="outlined" style={{width: 100}} />
      </Grid>
      <Grid item xs={5} sm={2}>
        <Select defaultValue={ "default"}
          className='todo_select'
          size='small'
          variant={'outlined'}>
          <MenuItem value={'default'}>No filter</MenuItem>
          <MenuItem value={'A...Z'}>A...Z</MenuItem>
          <MenuItem value={'Z...A'}>Z...A</MenuItem>
          <MenuItem value={'low'} className='blue'>cheap...expensive </MenuItem>
          <MenuItem value={'hight'} className='purpure'>expensive...cheap</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
}
export default FilterProducts;