import {Assignment } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
function CategoriesList(props) {
  return(
    <div id='categories'>
      { props.categories.map(category =>                
        <div key={category.id} className="category_container">               
          <IconButton color='primary'><Assignment className='category_icon' fontSize='large'/>{category.name}</IconButton>
        </div>
      )}
    </div>
    )}
export default CategoriesList;