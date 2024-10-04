import { test } from '@playwright/test';

test.describe('Test Group', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://practice.cydeo.com');
    });
    test.afterEach(async ({ page }) => {
        await page.waitForTimeout(3000);
    });

  test('Getting the title of the page', async ({ page }) => {
    let pageTitle = await page.title();
    console.log('Title of the page: ', pageTitle);
  });

  test('Set the window size ', async ({ page }) => {
    await page.setViewportSize({ width: 1900, height: 1080 });

    // Your test steps go here
  });

  test('Getting the correct URL of the page', async ({ page }) => {
   let pageURL = await page.url();
    console.log('URL of the page: ', pageURL);
    // Your test steps go here
  });
});