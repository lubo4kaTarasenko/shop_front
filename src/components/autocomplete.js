import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from "react-redux";
import { updateProducts,  updatePages } from "../redux/actions";

import ProductsApi from '../services/productsApi';
function SearchComp(props) {
  return (
    <Autocomplete
      id="search_complete"
      options={props.products}
      getOptionLabel={(option) => option.name}
      style={{ width: 250 }}
      autoSelect={true}
      onInputChange={(e, v) => {loadListOfProducts(v)}}
      renderInput={(params) => <TextField {...params}  label="Search" variant="filled" id='search_input' />}
    />
  );

  function dispatchUpdateState(products, pages){
    props.updateProducts(products)
    props.updatePages(pages)
  }

  function loadListOfProducts(v){
    new ProductsApi().getList(v).then(
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
)(SearchComp);