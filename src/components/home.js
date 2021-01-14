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
import searchParams from '../helpers/searchParams';


class HomePage extends React.Component {    
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: true,
        categories: []
      }
    }
    componentDidMount() {
      const p = {
        search: '', page: 1, filter: '', price_from: '', price_to: '', category: ''
      }
      this.loadListOfProducts(p)
      this.loadListOfCategories()
    }

    loadListOfProducts(p){
      new ProductsApi().getListByParams(p).then(
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
      return (
        <div id='home_cont'>
          <FilterProducts/>
           <Grid container >        
              <Grid item xs={4} sm={2} className='categories_grid'>
                <CategoriesList categories={this.state.categories}/>
              </Grid>
              <Grid item xs={8} sm={10}>
                {this.props.products.length !== 0 ? <ProductsList/> : <div>No products found</div>}
              </Grid>         
          </Grid>
          <Grid container > 
            <Grid item xs={1} sm={5}></Grid>
            <Grid item xs={11} sm={4} className='page_grid'>            
              <Pagination count={this.props.pages} variant="outlined" shape="rounded" id='paginator'
                onChange={(e, page)=>{
                  const p = searchParams();
                  p.page = page;
                  this.loadListOfProducts(p) 
                }
              }
              /> 
            </Grid>
          </Grid>
        </div>
  )}


  dispatchUpdateState(products, pages){
    this.props.updateProducts(products)
    this.props.updatePages(pages)
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
)(HomePage);