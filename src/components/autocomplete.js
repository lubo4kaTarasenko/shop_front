import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { connect } from "react-redux";
import { updateProducts } from "../redux/actions";


function SearchComp(props) {
  return (
    <Autocomplete
      id="search_complete"
      options={props.products}
      getOptionLabel={(option) => option.name}
      style={{ width: 250 }}
      autoSelect={true}
      onInputChange={(e, v) => {dispatchUpdateProducts(v)}}
      renderInput={(params) => <TextField {...params}  label="Search" variant="filled" id='search_input' />}
    />
  );
  function dispatchUpdateProducts(filter){
    let products = props.products.filter(p => p.name.includes(filter));
    console.log(products)
    props.updateProducts(products)
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