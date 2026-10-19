
const { When, Then } = require('@cucumber/cucumber');
const assert = require('node:assert/strict');
const { expect } = require('playwright/test');
const CartPage = require('../../pages/CartPage');
const ConfirmacionPage = require('../../pages/ConfirmacionPage');

When('inicia el proceso de compra', async function () {
  this.cartPage = new CartPage(this.page);
  this.confirmacionPage = new ConfirmacionPage(this.page);

  await this.cartPage.checkout();
  await this.page.waitForURL(/checkout-step-one\.html/);
});

When(
  'completa los datos del cliente con nombre {string}, apellido {string} y código postal {string}',
  async function (firstName, lastName, postalCode) {
    await this.confirmacionPage.fillCustomerInformation(
      firstName,
      lastName,
      postalCode
    );
  }
);

When('continúa a la revisión del pedido', async function () {
  await this.confirmacionPage.continueCheckout();
  await this.page.waitForURL(/checkout-step-two\.html/);
});

Then(
  'el resumen debe contener el producto {string}',
  async function (expectedProduct) {
    const productNames = await this.confirmacionPage.getSummaryProductNames();
    assert.ok(
      productNames.includes(expectedProduct),
      `No se encontró "${expectedProduct}" en el resumen de compra.`
    );
  }
);

When('confirma el pedido', async function () {
  await this.confirmacionPage.finishCheckout();
  await this.page.waitForURL(/checkout-complete\.html/);
});

Then(
  'debe visualizar el mensaje de confirmación {string}',
  async function (expectedMessage) {
    const actualMessage =
      await this.confirmacionPage.getConfirmationMessage();
    assert.equal(actualMessage, expectedMessage);
  }
);

Then('debe estar en la página de compra completada', async function () {
  await expect(this.page).toHaveURL(/checkout-complete\.html/);
  await this.page.waitForTimeout(3000);
});
