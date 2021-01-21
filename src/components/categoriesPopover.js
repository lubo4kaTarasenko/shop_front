import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {ArrowRight } from '@material-ui/icons';
import { useAtom } from 'jotai'
import {productsAtom, pagesAtom, categoriesAtom, paramsAtom } from '../atoms/shopAtoms'
import ProductsApi from '../services/productsApi';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function CategoriesPopover(props) {
  const [products, setProducts] = useAtom(productsAtom)
  const [pages, setPages] = useAtom(pagesAtom)
  const [categories, setCategories] = useAtom(categoriesAtom)
  const [params, setParams] = useAtom(paramsAtom)

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <Button aria-describedby={id}  onClick={handleClick}
      style={{float: 'right', marginTop: '10px'}}>
       <ArrowRight/>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          {props.category.subcategories.map(sc =>
              <div key={sc} id={sc} style={{color: 'darkblue', cursor: 'pointer'}}>
                <span onClick={() => {subcategoryChoose(sc)}}>{sc}</span>
                <hr/>
              </div>           
            )}
        </Typography>
      </Popover>
    </div>
  );
  function subcategoryChoose(sc){  
    let elemsCategory = document.getElementsByClassName('checked_category');
    [].forEach.call(elemsCategory, function(el) {
      el.classList.remove("checked_category");
    });
    let elemsSubcategory = document.getElementsByClassName('checked_subcategory');
    [].forEach.call(elemsSubcategory, function(el) {
      el.classList.remove("subchecked_category");
    });
    const checked_subcategory = document.getElementById(`${sc}`)
    checked_subcategory.classList.add('checked_subcategory');
    //checked_category.parentNode.parentNode.classList.add('checked_category')
    params.subcategory = sc;
    setParams(params)

    new ProductsApi().getListByParams(params).then(
      (result) => {
        dispatchUpdateState(result.products, result.pages)
      },
    )    
  }
  function dispatchUpdateState(products, pages){
    setProducts(products)
    setPages(pages)
  }
}
