import {React, useEffect} from 'react'
import ProductsApi from '../services/productsApi';
import CategoriesApi from '../services/categoriesApi';
import {Grid} from '@material-ui/core';
import CategoriesList from './categoriesList';
import ProductsList from './productsList';
import Pagination from '@material-ui/lab/Pagination';
import FilterProducts from './filter';
import { useAtom } from 'jotai'
import {productsAtom, pagesAtom, categoriesAtom, paramsAtom } from '../atoms/shopAtoms'



export default function HomePage() {
  const [products, setProducts] = useAtom(productsAtom)
  const [pages, setPages] = useAtom(pagesAtom)
  const [categories, setCategories] = useAtom(categoriesAtom)
  const [params, setParams] = useAtom(paramsAtom)

  useEffect(() => {
    console.log(products.length)
    
    if(!global.loaded) {
      loadListOfProducts()
      loadListOfCategories()
      global.loaded = 1;
    }
  }, [products, pages, categories, params])

  function loadListOfProducts(){
      new ProductsApi().getListByParams(params).then(
        (result) => {
          dispatchUpdateState(result.products, result.pages)
        },
      )
    }

    function loadListOfCategories(){
      new CategoriesApi().getList().then(
        (result) => {
          setCategories(result.categories)          
        },
      )
    }

  function dispatchUpdateState(products, pages){
    setProducts(products)
    setPages(pages)
  }

    return (
      <div id='home_cont'>
        <FilterProducts/>
          <Grid container >        
            <Grid item xs={6} sm={2} className='categories_grid'>
              <CategoriesList/>
            </Grid>
            <Grid item xs={6} sm={10}>
              {products !== 0 ? <ProductsList/> : <div>No products found</div>}
            </Grid>         
        </Grid>
        <Grid container > 
          <Grid item xs={1} sm={5}></Grid>
          <Grid item xs={11} sm={4} className='page_grid'>            
            <Pagination count={pages} variant="outlined" shape="rounded" id='paginator'
              onChange={(e, page)=>{                
                params.page = page;
                setParams(params)
                loadListOfProducts(params) 
              }
            }
            /> 
          </Grid>
        </Grid>
      </div>
  )
}
