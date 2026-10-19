class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getProductNames() {
   await this.cartItems
    .locator('.inventory_item_name')
    .first()
    .waitFor({ state: 'visible' });

  return await this.cartItems
    .locator('.inventory_item_name')
    .allTextContents();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;
