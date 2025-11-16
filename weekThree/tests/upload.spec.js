const { test, expect } = require('@playwright/test');

test('TC-04 — Upload a file (Image)', async ({ page }) => {
    // Step 1: Navigate to the https://qaplayground.dev/apps/upload/
    await page.goto('https://qaplayground.dev/apps/upload/');
    const filePath = './weekThree/tests/test_image.png';
    
    // Step 2: Click Select Image File button | and wait for file chooser
    const [fileChooser] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('text=Select Image File').click(), // Adjust selector as needed
    ]);

    // Step 3: Select the image file
    await fileChooser.setFiles(filePath);

    // Step 4: Verify if image has been added and image is displayed on page
    const img = page.locator('#images img');
    await expect(img).toBeVisible();
    await expect(img).toHaveAttribute('src', /^data:image\/(png|jpeg);base64,/);
    await expect(page.locator('figcaption')).toHaveText('test_image.png');
}); 