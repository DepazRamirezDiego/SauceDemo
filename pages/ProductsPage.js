class ProductsPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addProductToCart(productId) {
    await this.page
      .locator(`[data-test="add-to-cart-${productId}"]`)
      .click();
  }

  async getCartCount() {
    if (await this.cartBadge.count() === 0) {
      return 0;
    }

    return Number(await this.cartBadge.textContent());
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = ProductsPage;
