import React from 'react';
import { Select, MenuItem, Grid, TextField} from '@material-ui/core';
import { connect } from "react-redux";
import { updateProducts,  updatePages } from "../redux/actions";
import ProductsApi from '../services/productsApi';

function FilterProducts(props) {
  return (
    <Grid container>
      <Grid item xs={12} sm={8}></Grid>
      <Grid item xs={7} sm={2}>
      <TextField className="price price_from" label="price from:" variant="outlined"  style={{width: 100}} />
      <TextField className="price price_to" label="price to:" variant="outlined" style={{width: 100}} />
      </Grid>
      <Grid item xs={5} sm={2}>
        <Select defaultValue={ "default"}
          id='products_select'
          size='small'
          variant={'outlined'}
          onChange={(e) =>{loadListOfProducts(e.target.value)}}>
          <MenuItem value={'default'}>No filter</MenuItem>
          <MenuItem value={'A...Z'}>A...Z</MenuItem>
          <MenuItem value={'Z...A'}>Z...A</MenuItem>
          <MenuItem value={'cheap...expensive'} className='blue'>cheap...expensive</MenuItem>
          <MenuItem value={'expensive...cheap'} className='purpure'>expensive...cheap</MenuItem>
        </Select>
      </Grid>
    </Grid>
  );
  function dispatchUpdateState(products, pages){
    props.updateProducts(products)
    props.updatePages(pages)
  }

  function loadListOfProducts(filter){
    new ProductsApi().getList('',1, filter).then(
      (result) => {
        dispatchUpdateState(result.products, result.pages)
      },
    )
  }
}
const mapStateToProps = (state) => {
  console.log('state =', state)
  return {
    pages: state.products.pages,
    products: state.products.products    
  }
}

export default connect(
  mapStateToProps,
  { updateProducts, updatePages }
)(FilterProducts);