const saveCartItems = (itemsHTML) => localStorage.setItem('cartItems', itemsHTML);

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
