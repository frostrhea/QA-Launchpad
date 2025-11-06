import { expect, test } from '@playwright/test';

test('ID Locators Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');

    // Two approaches to locate
    // await page.locator('<locator>').action()
    // await page.action('<locator>')

    // Locate by ID locators
    // Positive Case
    await page.locator('#username').fill('practice');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.click('#submit-login');
    await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
    await expect(page.locator('#flash')).toHaveText(/You logged into a secure area!/);
    // no id locator for logout button, so using class locator instead
    await page.click('a.button.secondary.radius.btn.btn-danger');
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');

    // Negative Case
    await page.locator('#username').fill('test_user');
    await page.locator('#password').fill('Test@12345');
    await page.click('#submit-login');
    await expect(page.locator('#flash')).toHaveText(/Your username is invalid!/);
});


test('CSS Selector Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');

    // Locate by CSS selector
    // Positive Case
    await page.locator('input.form-control[name="username"]').fill('practice');
    await page.locator('input.form-control[name="password"]').fill('SuperSecretPassword!');
    await page.click('button[name="submit-login"]');
    await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
    await expect(page.locator('div.alert.alert-success.alert-dismissible.fade.show')).toHaveText(/You logged into a secure area!/);
    // using class locator instead
    await page.click('a.button.secondary.radius.btn.btn-danger');
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');

    // Negative Case
    await page.locator('input.form-control[name="username"]').fill('test_user');
    await page.locator('input.form-control[name="password"]').fill('Test@12345');
    await page.click('button[name="submit-login"]');
    await expect(page.locator('div.alert.alert-danger.alert-dismissible.fade.show')).toHaveText(/Your username is invalid!/);
});


test('X Path Locator Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');

    // Locate by X Path
    // Positive Case
    await page.locator('//*[@id="username"]').fill('practice');
    await page.locator('//*[@id="password"]').fill('SuperSecretPassword!');
    await page.click('//*[@id="submit-login"]');
    await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
    await expect(page.locator('//*[@id="flash"]')).toHaveText(/You logged into a secure area!/);

    await page.click('//*[@id="core"]/div/div/a');
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');

    // Negative Case
    await page.locator('//*[@id="username"]').fill('test_user');
    await page.locator('//*[@id="password"]').fill('Test@12345');
    await page.click('//*[@id="submit-login"]');
    await expect(page.locator('//*[@id="flash"]')).toHaveText(/Your username is invalid!/);

});


test('Class Locator Test', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/login');

    // Locate by Class locators
    // Since form-control class is common for both username and password fields,
    // we need to be more specific by combining ID and Class locators

    // Positive Case
    await page.locator('#username.form-control').fill('practice');
    await page.locator('#password.form-control').fill('SuperSecretPassword!');
    await page.click('.btn.btn-bg.btn-primary.d-block.w-100');
    await expect(page.url()).toBe('https://practice.expandtesting.com/secure');
    await expect(page.locator('.alert.alert-success.alert-dismissible.fade.show')).toHaveText(/You logged into a secure area!/);

    await page.click('a.button.secondary.radius.btn.btn-danger');
    await expect(page.url()).toBe('https://practice.expandtesting.com/login');

    // Negative Case
    await page.locator('#username.form-control').fill('test_user');
    await page.locator('#password.form-control').fill('Test@12345');
    await page.click('.btn.btn-bg.btn-primary.d-block.w-100');
    await expect(page.locator('.alert.alert-danger.alert-dismissible.fade.show')).toHaveText(/Your username is invalid!/);
});
