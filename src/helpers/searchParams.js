export default function searchParams() {
  return {
    search: document.getElementById('search_complete').value,
    page: 1,
    filter: getFilter(),
    price_from: getPriceFrom(), 
    price_to: getPriceTo(),
    category: getCategory(), 
    subcategory: getSubcategory()
  }
}

function getPriceTo() {
  try {
    return document.getElementById('price_to').value
  } catch(e) {
    return ''
  }
}

function getPriceFrom() {
  try {
    return document.getElementById('price_from').value
  } catch(e) {
    return ''
  }
}

function getCategory() {
  try {
    return (document.getElementsByClassName('checked_category') )[0].id
  }catch(e) {
    return '';
  }
}
function getSubcategory() {
  try {
    return (document.getElementsByClassName('checked_subcategory') )[0].id
  }catch(e) {
    return '';
  }
}

function getFilter() {
  try {
    return document.getElementById('products_select').innerHTML
  }catch(e) {
    return '';
  }
}