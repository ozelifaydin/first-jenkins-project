import {test}  from '@playwright/test';

test('Youtube search', async ({ page }) => {
   await page.goto('https://www.youtube.com');

   await page.waitForTimeout(3000);
   page.locator("//input[@id='search' and @name='search_query']").click;

//input[@name='search_query']

});