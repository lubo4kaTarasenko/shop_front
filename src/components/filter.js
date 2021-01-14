import React from 'react';
import { Select, MenuItem, Grid, TextField, Button} from '@material-ui/core';
import { connect } from "react-redux";
import { updateProducts,  updatePages } from "../redux/actions";
import ProductsApi from '../services/productsApi';

function FilterProducts(props) {
  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={6}></Grid>
      <Grid item xs={4} md={3} lg={2}>
      <TextField className="price" id="price_from" label="price from:" variant="outlined"  style={{width: 100}} />
      <TextField className="price" id="price_to" label="price to:" variant="outlined" style={{width: 100}} />
      </Grid>
      <Grid item xs={5} md={4} lg={2}>
        <Select defaultValue={ "default"}
          id='products_select'
          size='small'
          variant={'outlined'}
          style={{width: 150}}
          onChange={(e) =>{loadListOfProducts(e.target.value)}}>
          <MenuItem value={'default'}>No filter</MenuItem>
          <MenuItem value={'A...Z'}>A...Z</MenuItem>
          <MenuItem value={'Z...A'}>Z...A</MenuItem>
          <MenuItem value={'cheap...expensive'} className='blue'>cheap...expensive</MenuItem>
          <MenuItem value={'expensive...cheap'} className='purpure'>expensive...cheap</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={3} md={1} lg={1}>
          <Button variant="contained" 
            color='primary'
            onClick={() => {filter_on_btn()}}
            style={{height: 56, float: 'left'}}>
            <b>Filter</b> 
          </Button>
      </Grid>
    </Grid>
  );
  function dispatchUpdateState(products, pages){
    props.updateProducts(products)
    props.updatePages(pages)
  }

  function filter_on_btn(){
    const filter = document.getElementById('products_select').innerHTML
    loadListOfProducts(filter) 
  }

  function loadListOfProducts(filter){
    const price_from = document.getElementById('price_from').value
    const price_to = document.getElementById('price_to').value
    const category = document.getElementsByClassName('checked_category')[0].id
    new ProductsApi().getList('', 1, filter, price_from, price_to, category).then(
      (result) => {
        dispatchUpdateState(result.products, result.pages)
      },
    )
  }
}
const mapStateToProps = (state) => {
  return {
    pages: state.products.pages,
    products: state.products.products    
  }
}

export default connect(
  mapStateToProps,
  { updateProducts, updatePages }
)(FilterProducts);