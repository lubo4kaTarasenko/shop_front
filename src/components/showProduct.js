
import React from 'react';
import ProductsApi from '../services/productsApi';
//import CategoriesList from './categoriesList';
//import { Link } from "react-router-dom";
//import cookie from 'react-cookies'
//import {Home, AccountBox,ShoppingCart, Search } from '@material-ui/icons';
//import SearchComp from './autocomplete';
import {Paper, Grid} from '@material-ui/core';

export default class ShowProduct extends React.Component {    
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
    const product = this.state.product
    return(
        <Grid container >        
              <Grid item xs={12} sm={2} md={12} lg={2} >                
              </Grid>            
                <Grid item xs={12} sm={4} md={4} lg={4}>
                <Paper className='show_product_paper'>
                  <div className='product_show_img show'><img src='../../ava.jpg' width='200px'/></div>
                  </Paper>
                </Grid>  
                <Grid item xs={12} sm={4} md={8} lg={4}>   
                  <Paper className='show_product_paper'>                 
                  <div className='product_show_name show'><b>name: </b> {product.name}</div>
                  <div className='product_show_price show'><b>price: </b> price: {product.price} $</div>
                  <div className='product_show_description show'><b>description: </b>{product.description}</div>
                  <div className='product_show_country show'><b>country: </b>{product.country}</div> 
                  </Paper>                
                </Grid>                       
          </Grid>
    )}

}