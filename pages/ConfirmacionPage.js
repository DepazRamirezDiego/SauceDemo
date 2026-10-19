
class ConfirmacionPage {
  constructor(page) {
    this.page = page;

    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]');

    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');

    this.summaryItems = page.locator('.cart_item .inventory_item_name');
    this.confirmationMessage = page.locator('.complete-header');
  }

  async fillCustomerInformation(firstName, lastName, postalCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout() {
    await this.continueButton.click();
  }

  async getSummaryProductNames() {
    await this.summaryItems.first().waitFor({ state: 'visible' });
  return await this.summaryItems.allTextContents();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async getConfirmationMessage() {
    return (await this.confirmationMessage.textContent())?.trim();
  }
}

module.exports = ConfirmacionPage;
