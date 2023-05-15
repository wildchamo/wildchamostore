/**
 *
 * @param {Array} products
 * @returns {Number} TotalPrice
 */

export const totalPrice = (products) => {
  let total = 0;
  products.forEach((product) => (total += product.price));
  return total;
};

export const noElements= (products) => {
    let total = 0;
    products.forEach((product) => (total += 1));
    return total;
}

