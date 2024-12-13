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

module.exports = {
  createProduct,
  getProducts
};
