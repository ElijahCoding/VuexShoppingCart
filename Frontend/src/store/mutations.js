export const setProducts = (state, products) => {
  state.products = products
}

export const appendToCart = (state, product) => {
  state.cart.push({
    product,
    quantity: 1
  })
}
// set cart
// clear cart
// remove cart
// append to cart
