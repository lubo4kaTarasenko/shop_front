import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from "react-redux";
import { updateProducts } from "../redux/actions";

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
  function dispatchUpdateProducts(products){
    props.updateProducts(products)
  }
  function loadListOfProducts(v){
    new ProductsApi().getList(v).then(
      (result) => {
        dispatchUpdateProducts(result.products)
      },
    )
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products.products
  }
}

export default connect(
  mapStateToProps,
  { updateProducts }
)(SearchComp);