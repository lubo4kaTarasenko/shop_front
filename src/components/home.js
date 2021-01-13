import React from 'react'
import ProductsApi from '../services/productsApi';
import CategoriesApi from '../services/categoriesApi';
import {Grid} from '@material-ui/core';
import CategoriesList from './categoriesList';
import ProductsList from './productsList';
import { connect } from "react-redux";
import { updateProducts } from "../redux/actions";
import Pagination from '@material-ui/lab/Pagination';

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
        this.loadListOfProducts()
        this.loadListOfCategories()
      }

    loadListOfProducts(){
      new ProductsApi().getList('', 1).then(
        (result) => {
          console.log(result)
          this.dispatchUpdateProducts(result.products)
          this.setState({
            isLoaded: true
          });
        },
      )
    }

    loadListOfCategories(){
      new CategoriesApi().getList().then(
        (result) => {
          console.log(result)
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
        <div>
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
              <Pagination count={50} variant="outlined" shape="rounded" id='paginator' /> 
            </Grid>
          </Grid>
        </div>
    )}else{
      return(
        <div>Wait</div>
      )
    }
  }

  dispatchUpdateProducts(products){
    this.props.updateProducts(products)
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
)(Home);