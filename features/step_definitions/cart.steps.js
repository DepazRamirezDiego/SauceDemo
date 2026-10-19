const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');
const LoginPage = require('../../pages/LoginPage');
const ProductsPage = require('../../pages/ProductsPage');
const CartPage = require('../../pages/CartPage');

Given(
  'que el cliente ha iniciado sesión y está en productos',
  async function () {
    this.loginPage = new LoginPage(this.page);
    this.productsPage = new ProductsPage(this.page);
    this.cartPage = new CartPage(this.page);

    await this.loginPage.navigate();
    await this.loginPage.login('standard_user', 'secret_sauce');
    await this.page.waitForURL(/inventory\.html/);
  }
);

When(
  'agrega el producto {string} al carrito',
  async function (productId) {
    await this.productsPage.addProductToCart(productId);
  }
);

When('abre el carrito de compras', async function () {
  await this.productsPage.openCart();
  await this.page.waitForURL(/cart\.html/);
});

Then(
  'el contador del carrito debe mostrar {string}',
  async function (expectedCount) {
    const actualCount = await this.productsPage.getCartCount();

    assert.equal(actualCount, Number(expectedCount));
  }
);

Then(
  'el carrito debe contener el producto {string}',
  async function (expectedProduct) {
    const productNames = await this.cartPage.getProductNames();
    assert.ok(
      productNames.includes(expectedProduct),
      `No se encontró "${expectedProduct}" en el carrito.`
    );
  }
);
