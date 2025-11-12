const { test, expect } = require('@playwright/test');

test('Successful Login Test', async ({ page }) => {
    // Step 1: Navigate to the login page
    await page.goto('https://www.saucedemo.com/');
    // Step 2: Enter username
    await page.locator('#user-name').fill('standard_user');
    // Step 3: Enter password
    await page.locator('#password').fill('secret_sauce');
    // Step 4: Click the Login button   
    await page.click('#login-button');

    // Expected Result: Verify redirection to inventory page
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    // Verify inventory page header is visible
    await expect(page.locator('.title')).toHaveText('Products');
    // Verify product list is visible
    await expect(page.locator('.inventory_list')).toBeVisible();
});