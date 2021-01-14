export default class ProductsApi{
  getListByParams(p) {
    return this.getList(p.search, p.page, p.filter, p.price_from, p.price_to, p.category)
  }

  getList(q, p, f, pr_f, pr_t,c){
    return fetch(`http://localhost:3001/products?q=${q}&p=${p}&f=${f}&pr_f=${pr_f}&pr_t=${pr_t}&c=${c}`)
    .then(res => res.json())
  }

  getProduct(name){
    return fetch(`http://localhost:3001/product?name=${name}`)
    .then(res => res.json())
  }

}
