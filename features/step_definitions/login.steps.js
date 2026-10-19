
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('playwright/test');
const LoginPage = require('../../pages/LoginPage');

Given(
  'que el usuario está en la página de inicio de sesión',
  async function () {
    this.loginPage = new LoginPage(this.page);
    await this.loginPage.navigate();
  }
);

When(
  'inicia sesión con el usuario {string} y contraseña {string}',
  async function (username, password) {
    await this.loginPage.login(username, password);
  }
);

Then('debería visualizar la página de productos', async function () {
  await expect(this.page).toHaveURL(/inventory\.html/);
});

Then(
  'debería visualizar un mensaje de error que contiene {string}',
  async function (expectedMessage) {
    await expect(this.loginPage.errorMessage).toBeVisible();
    await expect(this.loginPage.errorMessage).toContainText(expectedMessage);
  }
);