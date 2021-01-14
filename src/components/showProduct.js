import {  Grid} from '@material-ui/core';
import React from 'react';
import ProductsApi from '../services/productsApi';
import CategoriesList from './categoriesList';
//import { Link } from "react-router-dom";
//import cookie from 'react-cookies'
//import {Home, AccountBox,ShoppingCart, Search } from '@material-ui/icons';
//import SearchComp from './autocomplete';

export default class ShowProducts extends React.Component {    
  constructor(props) {
    super(props);
    this.state = {      
      product: []
    }
  }
  componentDidMount() {    
    this.loadProduct()
  }

  loadProduct(){
    new ProductsApi().getProduct(this.props.match.params.url_name).then(
      (result) => {
        this.setState({
          product: result.product
        });
      },
    )
  }


  render(){
    return(
      <div class='product.container'>
        <Grid container >        
              <Grid item xs={4} sm={2} className='categories_grid'>
                <CategoriesList categories={[1,2,2]}/>
              </Grid>
              <Grid item xs={8} sm={10}>
                  <div></div>
              </Grid>         
          </Grid>
      </div>
    )}

}