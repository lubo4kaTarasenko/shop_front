export default class ProductsApi{
  
  getList(q, p, f, pr_f, pr_t){
    return fetch(`http://localhost:3001/products?q=${q}&p=${p}&f=${f}&pr_f=${pr_f}&pr_t=${pr_t}`)
    .then(res => res.json())
  }

}
