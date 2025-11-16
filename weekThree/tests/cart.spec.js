const {test, expect} = require('@playwright/test');

test('TC-03 — Add and remove a product from the cart', async ({page}) => {
    // Precondition: User is logged in and on the inventory page
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');
    await page.locator('#login-button').click();

    // Step 1: On inventory page, locate `Sauce Labs Backpack`
    const productName = 'Sauce Labs Backpack';

    //Step 2: Click Add to cart for `Sauce Labs Backpack`
    await page.locator('.inventory_item', { hasText: productName }).locator('button').click();

    // Step 3: Click the cart icon
    await page.locator('.shopping_cart_link').click();

    // Step 4: Verify `Sauce Labs Backpack` is listed in the cart
    await expect(page.locator('.cart_item')).toContainText(productName);

    // Step 5: Click Remove for `Sauce Labs Backpack`
    await page.locator('.cart_item', { hasText: productName }).locator('button').click();

    // Expected result: After removal, `Sauce Labs Backpack` is no longer listed in the cart
    await expect(page.locator('.cart_list')).not.toContainText(productName);

});