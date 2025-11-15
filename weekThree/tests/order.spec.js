
const { test, expect } = require('@playwright/test');

test('TC-02 — Order a product test', async ({ page }) => {
    // Precondition: User is logged in and on the inventory page
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill('standard_user');
    await page.locator('#password').fill('secret_sauce');   
    await page.locator('#login-button').click();          

    // Step 1: On inventory page, locate `Sauce Labs Backpack`
    const productName = 'Sauce Labs Backpack';

    // Step 2: Click Add to cart for `Sauce Labs Backpack`
     await page.locator('.inventory_item', { hasText: productName }).locator('button').click();

    // Step 3: Click the cart icon (top-right)  
    await page.locator('.shopping_cart_link').click();
    // Step 4: Verify `Sauce Labs Backpack` appears in the cart items
    await expect(page.locator('.cart_item')).toContainText(productName);
    // Step 5: Click Checkout
    await page.locator('#checkout').click();
    // Step 6: Enter First name, Last name, and Postal code → click Continue
    await page.locator('#first-name').fill('Jack');
    await page.locator('#last-name').fill('Frost');
    await page.locator('#postal-code').fill('1111');
    await page.locator('#continue').click();
    // Step 7: On the Checkout Overview page, verify item description, quantity, and price are correct  
    const item = page.locator('.cart_item');
    await expect(item).toContainText(productName);
    await expect(item.locator('.cart_quantity')).toHaveText('1');
    await expect(item.locator('.inventory_item_price')).toHaveText('$29.99');
    // Step 8: Click Finish
    await page.locator('#finish').click();

    // Expected result: After Finish, user sees the order confirmation page
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    // Back Home button is shown
    await expect(page.locator('#back-to-products')).toBeVisible();
});
