import {Assignment } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { connect } from "react-redux";
import { updateProducts,  updatePages } from "../redux/actions";
import ProductsApi from '../services/productsApi';

function CategoriesList(props) {
  return(
    <div id='categories'>
      { props.categories.map(category =>                
        <div key={category.id}  className="category_container" id={`${category.id}`} >               
          <IconButton color='primary' className='category_btn'
            onClick={() => {categoryChoose(category.id)}} >
            <Assignment className='category_icon' fontSize='large'/>
            {category.name}
          </IconButton>
        </div>
      )}
    </div>
    )
    function categoryChoose(c){
      let elems = document.getElementsByClassName('checked_category');
      [].forEach.call(elems, function(el) {
        el.classList.remove("checked_category");
      });
      document.getElementById(`${c}`).classList.add('checked_category')
      const price_from = document.getElementById('price_from').value
      const price_to = document.getElementById('price_to').value
      const filter = document.getElementById('products_select').innerHTML
      const search = document.getElementById('search_complete').value
      new ProductsApi().getList(search, 1, filter, price_from, price_to, c).then(
        (result) => {
          dispatchUpdateState(result.products, result.pages)
        },
      )    
    }
    function dispatchUpdateState(products, pages){
      props.updateProducts(products)
      props.updatePages(pages)
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
  )(CategoriesList);