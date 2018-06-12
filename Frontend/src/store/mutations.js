export const setProducts = (state, products) => {
  state.products = products
}

export const appendToCart = (state, { product, quantity }) => {
  const existing = state.cart.find((item) => {
    return item.product.id === product.id
  })

  if (existing) {
    existing.quantity++
  } else {
    state.cart.push({
      product,
      quantity: quantity
    })
  }
}
// set cart
// clear cart
// remove cart
// append to cart
