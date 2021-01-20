import { fullPath } from "./baseUrl";

export default class ProductsApi{
  getListByParams(p) {
    return this.getList(p.search, p.page, p.filter, p.price_from, p.price_to, p.category, p.subcategory)
  }

  getList(q, p, f, pr_f, pr_t,c, sc){
    return fetch(fullPath(`/products?q=${q}&p=${p}&f=${f}&pr_f=${pr_f}&pr_t=${pr_t}&c=${c}&sc=${sc}`))
    .then(res => res.json())
  }

  getProduct(name){
    return fetch(fullPath(`/product?name=${name}`))
    .then(res => res.json())
  }

}
