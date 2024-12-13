// In Memory DB

const products = [];

function createProduct(product) {
  const newProduct = {
    id: products.length,
    ...product,
  };
  products.push(newProduct);
  return newProduct;
}

function getProducts() {
  return products;
}
function getProductById(id) {
    return products.filter(product => product.id == id)[0];
  }

module.exports = {
  createProduct,
  getProducts,
  getProductById
};
