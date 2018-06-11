import axios from 'axios'

export const getProducts = ({ commit }) => {
  return axios.get('http://127.0.0.1:8000/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}
// get cart
// add a product to cart
// remove a product from cart
// remove all products from cart
