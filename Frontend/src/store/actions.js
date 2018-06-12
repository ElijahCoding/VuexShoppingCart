import axios from 'axios'

export const getProducts = ({ commit }) => {
  return axios.get('http://127.0.0.1:8000/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

export const addProductToCart = ({ commit }, { product, quantity }) => {
  commit('appendToCart', { product, quantity })

  return axios.post('http://127.0.0.1:8000/api/cart', {
    product_id: product.id,
    quantity
  })
}
// get cart
// add a product to cart
// remove a product from cart
// remove all products from cart
