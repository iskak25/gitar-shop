function render() {
  // header
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);

  // products
  productsPage.render();
  console.log("fs");
}
render();

// let CATALOG = [];
