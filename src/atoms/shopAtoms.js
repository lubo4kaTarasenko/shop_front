import { atom } from 'jotai'

export const productsAtom = atom([])
export const pagesAtom = atom(1)
export const categoriesAtom = atom([])
export const paramsAtom = atom({search: '', page: 1, filter: '', price_from: '', price_to: '', category: '', subcategory: ''})
