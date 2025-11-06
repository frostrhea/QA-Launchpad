import { test, expect } from '@playwright/test';

test('hello world test', async ({page}) => {

    // Navigate to Google and verify the title
    await page.goto('https://google.com');
    await expect(page).toHaveTitle(/Google/);

    // Another way to get and log the title
    const pageTitle=page.title();
    console.log("The page title is: " + pageTitle);
    await expect(pageTitle).toHaveTItle(/Google/);

    page.close();
});