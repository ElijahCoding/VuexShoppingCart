import axios from 'axios'

export const getProducts = ({ commit }) => {
  return axios.get('http://fresher.app:8000/api/products').then((response) => {
    commit('setProducts', response.data)
    return Promise.resolve()
  })
}

export const addProductToCart = ({ commit, dispatch }, { product, quantity }) => {
  commit('appendToCart', { product, quantity })

  dispatch('flashMessage', 'Item added to cart', { root: true })

  return axios.post('http://fresher.app:8000/api/cart', {
    product_id: product.id,
    quantity
  })
}

export const getCart = ({ commit }) => {
  return axios.get('http://fresher.app:8000/api/cart').then((response) => {
    commit('setCart', response.data)
    return Promise.resolve()
  })
}

export const removeProductFromCart = ({ commit }, productId) => {
  commit('removeFromCart', productId)
  return axios.delete(`http://fresher.app:8000/api/cart/${productId}`)
}

export const removeAllProductsFromCart = ({ commit, dispatch }) => {
  commit('clearCart')
  dispatch('flashMessage', 'All items removed', { root: true })
  return axios.delete('http://fresher.app:8000/api/cart')
}
