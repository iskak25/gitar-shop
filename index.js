function render() {
  // header
  const productsStore = localStorageUtil.getProducts();

  headerPage.render(productsStore.length);

  // products
  productsPage.render();
}

let CATALOG = [];

fetch("http://localhost:3000/posts")
  .then((res) => res.json())
  .then((body) => {
    CATALOG = body;
    render();
  })
  .catch((error) => {
    console.log(error);
  });
