class Header {
  hanlerOpenShoppingPage() {
    shoppingPage.render();
  }

  render(count) {
    const html = `
        <div class = "header-container">
         <div class ="header-counter" onclick="headerPage.hanlerOpenShoppingPage();">
         🔥${count}
         </div>
        </div>

        `;
    ROOT_HEADER.innerHTML = html;
  }
}

const headerPage = new Header();
