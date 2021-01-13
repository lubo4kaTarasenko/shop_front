import React from 'react'
import ProductsApi from '../services/productsApi';
import CategoriesApi from '../services/categoriesApi';
import {Grid} from '@material-ui/core';
import CategoriesList from './categoriesList';
import ProductsList from './productsList';
import { connect } from "react-redux";
import { updateProducts,  updatePages } from "../redux/actions";
import Pagination from '@material-ui/lab/Pagination';
import FilterProducts from './filter';

class Home extends React.Component {    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        categories: []
      }
    }
    componentDidMount() {
      this.loadListOfProducts(1)
      this.loadListOfCategories()
    }

    loadListOfProducts(page){
      new ProductsApi().getList('', page).then(
        (result) => {
          this.dispatchUpdateState(result.products, result.pages)
          this.setState({
            isLoaded: true
          });
        },
      )
    }

    loadListOfCategories(){
      new CategoriesApi().getList().then(
        (result) => {
          this.setState({
            isLoaded: true,
            categories: result.categories
          });
        },
      )
    }

  render() {
    if(this.props.products.length !== 0){
      return (
        <div id='home_cont'>
          <FilterProducts/>
          <Grid container >        
              <Grid item xs={4} sm={2} className='categories_grid'>
                <CategoriesList categories={this.state.categories}/>
              </Grid>
              <Grid item xs={8} sm={10}>
                <ProductsList/>
              </Grid>         
          </Grid>
          <Grid container > 
            <Grid item xs={1} sm={5}></Grid>
            <Grid item xs={11} sm={4} className='page_grid'>            
              <Pagination count={this.props.pages} variant="outlined" shape="rounded" id='paginator'
                onChange={(e, page)=>{this.loadListOfProducts(page)}} /> 
            </Grid>
          </Grid>
        </div>
    )}else{
      return(
        <div>Wait</div>
      )
    }
  }

  dispatchUpdateState(products, pages){
    this.props.updateProducts(products)
    this.props.updatePages(pages)
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
)(Home);