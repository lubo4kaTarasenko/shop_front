import {Assignment } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import { connect } from "react-redux";
import { updateProducts,  updatePages } from "../redux/actions";
import ProductsApi from '../services/productsApi';
import searchParams from '../helpers/searchParams';

function CategoriesList(props) {
  return(
    <div id='categories'>
      <div className="category_container, checked_category" id='undefined'>               
          <IconButton color='primary' className='category_btn'
            onClick={() => {categoryChoose('undefined')}} >
            <Assignment className='category_icon' fontSize='large'/>
              All categories
          </IconButton>
        </div>
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
      document.getElementById(`${c}`).classList.add('checked_category');

      const p = searchParams();
      p.category = c;

      new ProductsApi().getListByParams(p).then(
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